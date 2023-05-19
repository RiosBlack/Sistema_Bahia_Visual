terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region                   = "us-east-1"
  //shared_credentials_files = ["~/.aws/credentials"]passar a pasta que eu salvei as credenciais do aws.
  profile                  = "pi_rh"
}