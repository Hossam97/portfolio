resource "aws_ecs_cluster" "portfolio-app-cluster" {
  name = "portfolio-app-cluster-tf"
}

resource "aws_ecs_task_definition" "portfolio-task" {
    family = "portfolio-app-task-tf"
    network_mode = "awsvpc"
    requires_compatibilities = ["FARGATE"]
    execution_role_arn = var.ecs_execution_role_arn
    cpu = "256"
    memory = "512"
    container_definitions = jsonencode([{
        name = "portfolio-app-container"
        image = var.container_image
        essential = true
        portMappings = [{
            containerPort = 3000
            protocol = "tcp"
        }]
    }])
}

resource "aws_ecs_service" "portfolio-service" {
    name = "portfolio-app-service-tf"
    cluster = aws_ecs_cluster.portfolio-app-cluster.id
    task_definition = aws_ecs_task_definition.portfolio-task.arn
    desired_count = 1
    launch_type = "FARGATE"
    network_configuration {
        subnets = var.public_subnets
        security_groups = [aws_security_group.portfolio-sg.id]
        assign_public_ip = true
    }
    load_balancer {
        target_group_arn = var.alb_target_group_arn
        container_name = "portfolio-app-container"
        container_port = 3000
    }
    depends_on = [var.alb_target_group_arn]
}

resource "aws_security_group" "portfolio-sg" {
    name        = "portfolio-app-sg-tf"
    description = "Security group for portfolio app"
    vpc_id      = var.vpc_id

    ingress {
        from_port   = 3000
        to_port     = 3000
        protocol    = "tcp"
        security_groups = [var.alb_security_group]
    }
    egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
