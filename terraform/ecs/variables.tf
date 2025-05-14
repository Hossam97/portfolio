variable "container_image" {
  description = "The container image to use for the ECS service"
  type        = string
}

variable "ecs_execution_role_arn" {
  description = "The ARN of the ECS execution role"
  type        = string
}

variable "vpc_id" {
  description = "The ID of the VPC where the ECS cluster will be deployed"
  type        = string
}

variable "alb_target_group_arn" {
  description = "The ARN of the ALB target group to associate with the ECS service"
  type        = string
}

variable "alb_security_group" {
    description = "The Application Load Balancer security group"
    type = string
}

variable "public_subnets" {
    type=list(string)
}
