docker build . -t sharebag/frontend
docker run -p 8080:80 sharebag/frontend
