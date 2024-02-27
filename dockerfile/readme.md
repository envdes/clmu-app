# Build CLMU-App
Junjie Yu, 2023-11-28, Manchester, UK

```
# into the work dir
cd to current dir with a dockerfile and cime_config
docker run --privileged --rm tonistiigi/binfmt --install all
docker buildx create --use --name mybuild node-amd64
docker buildx create --append --name mybuild node-arm64
docker buildx build --platform linux/amd64,linux/arm64 -t clmu-app:1.0 .
```