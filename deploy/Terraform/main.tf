

resource "aws_vpc" "vpc_pi_dh" {
  cidr_block = "10.0.0.0/16"
  enable_dns_hostnames = true
  enable_dns_support = true

  tags = {
    "name" = "vpc_pi_dh"
  }
}

resource "aws_subnet" "public_subnet_pi_dh" {
  vpc_id = aws_vpc.vpc_pi_dh
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-1"
  map_public_ip_on_launch = true

  tags = {
    "Name" = "public_subnet_pi_dh"
  }
}

resource "aws_subnet" "private_subnet_pi_dh" {
  vpc_id = aws_vpc.vpc_pi_dh
  cidr_block = "10.0.2.0/24"

  tags = {
    "Name" = "private_subnet_pi_dh"
  }
}

resource "aws_internet_gateway" "internet_gateway_pi_dh" {
  vpc_id = aws_vpc.vpc_pi_dh

  tags = {
    "Name"= "internet_gateway_pi_dh"
  }
}

resource "aws_route_table" "route_table_pi_dh" {
  vpc_id = aws_vpc.vpc_pi_dh

  tags = {
    "Name" = "route_table_pi_dh"
  }
}

resource "aws_route" "route_pi_dh" {
  route_table_id = aws_route_table.route_table_pi_dh
  destination_cidr_block = "0.0.0.0/0"
  gateway_id = aws_internet_gateway.internet_gateway_pi_dh
}

resource "aws_route_table_association" "rta_pi_dh" {
  route_table_id = aws_route_table.route_table_pi_dh
  subnet_id = aws_subnet.public_subnet_pi_dh
}

resource "aws_instance" "frontend_ec2_pi_dh" {
  instance_type = "t2.micro"
  key_name = aws_key_pair.key_pi_dh
  vpc_security_group_ids = [aws_security_group_rule.sgr_public_pi_dh]
  subnet_id = aws_subnet.public_subnet_pi_dh

  ami = data.aws_ami.dh_pi_ami.id

  root_block_device {
    volume_size = 8
  }

  tags = {
    "Name" = "frontend_ec2_pi_dh"
  }
}
