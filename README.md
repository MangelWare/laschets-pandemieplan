![image](https://user-images.githubusercontent.com/34030996/113772621-355fff80-9725-11eb-9280-4071597dc44d.png)

### Build:
```bash
docker build . -t pandemieplan:latest
```

### Run:
```bash
docker run -d -p 8080:8080 --restart always --name pandemieplan pandemieplan
```
