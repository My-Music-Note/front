#!/bin/bash

# 기존 컨테이너 중지
docker stop masiljangajji/front-app:latest || true
# 기존 컨테이너 삭제
docker rm masiljangajji/front-app:latest || true

# 새로운 컨테이너 실행
docker run -d -p 80:3000 masiljangajji/front-app:latest
