#!/bin/bash
#install dependeces
sudo apt-get update && apt-get -y install openjdk-11-jdk 
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64/ echo $JAVA_HOME 

#access user root
    sudo su

#create project folder
    mkdir ~/project
    cd ~/project

#clone your project from git repository
    git clone https: https://gitlab.ctd.academy/ctd/brasil/projeto-integrador-1/0523/grupo-7.git
    git checkout main
    git pull
    cd grupo-7/backend/renthotels

#eu preciso agora gerar a build do projeto e rodar.

