provider "aws" {
  region = "eu-north-1"
}

module "alb" {
  source       = "./alb"
  vpc_id       = module.vpc.vpc_id
  public_subnets = module.vpc.public_subnets
}

module "ecs" {
  source         = "./ecs"
  alb_target_group_arn = module.alb.alb_target_group_arn
  alb_security_group  =  module.alb.alb_security_group_id
  vpc_id         = module.vpc.vpc_id
  ecs_execution_role_arn = module.iam.ecs_execution_role_arn
  public_subnets = module.vpc.public_subnets
  container_image = var.container_image
}

module "iam" {
  source       = "./iam"
}

module "vpc" {
  source = "./vpc"
  vpc_cidr            = var.vpc_cidr
  public_subnets = var.public_subnets
}