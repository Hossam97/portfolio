output "vpc_id" {
  value = aws_vpc.portfolio-app-vpc-tf.id
}

output "public_subnets" {
  value = aws_subnet.public[*].id
}