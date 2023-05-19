resource "aws_security_group" "sg_pi_dh" {
  name = "sg_pi_dh"
  description = "Security Group Integrative project Digital House"
  vpc_id = aws_vpc.vpc_pi_dh
}

resource "aws_security_group_rule" "sgr_public_pi_dh" {
  from_port = 0
  protocol = "-1"
  security_group_id = aws_security_group.sg_pi_dh
  to_port = 0
  type = "egress"
  cidr_blocks = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "sgr_ssh_in_pi_sh" {
  from_port = 22
  protocol = "tcp"
  security_group_id = aws_security_group.sg_pi_dh
  to_port = 22
  type = "ingress"
  cidr_blocks = ["0.0.0.0/0"]
}

resource "aws_key_pair" "key_pi_dh" {
  key_name = "aws_ssh_pi_dh"
  public_key = file("")//aqui dentro passo o endereço da chave ssh ed25519 "criamos com o código ssh-keygen -t ed25519"
}