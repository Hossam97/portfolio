resource "aws_vpc" "portfolio-app-vpc-tf" {
  cidr_block           = var.vpc_cidr
  enable_dns_hostnames = true
  enable_dns_support   = true

  tags = {
    Name = "portfolio-vpc-tf"
  }
}

resource "aws_internet_gateway" "igw" {
  vpc_id = aws_vpc.portfolio-app-vpc-tf.id

  tags = {
    Name = "portfolio-igw-tf"
  }
}

resource "aws_subnet" "public" {
  count                   = length(var.public_subnets)
  vpc_id                  = aws_vpc.portfolio-app-vpc-tf.id
  cidr_block              = var.public_subnets[count.index]
  map_public_ip_on_launch = true
  availability_zone       = data.aws_availability_zones.available.names[count.index]

  tags = {
    Name = "portfolio-public-${count.index + 1}-tf"
  }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.portfolio-app-vpc-tf.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.igw.id
  }

  tags = {
    Name = "portfolio-public-rt-tf"
  }
}

resource "aws_route_table_association" "public" {
  count          = length(aws_subnet.public)
  subnet_id      = aws_subnet.public[count.index].id
  route_table_id = aws_route_table.public.id
}

data "aws_availability_zones" "available" {}