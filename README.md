# 多环境 demo

## scripts

package.json 里面有 2 个多出来的命令

1. deploy:build build 完之后复制 replace.sh 到 build 目录
2. deploy:start 启动之前先进行变量替换（变量是后面传进来的健值对 key=value)

```shell
"deploy:build": "yarn build && cp ./replace.sh ./build",
"deploy:start": "cd build && sh ./replace.sh REACT_APP_CUSTOM_KEY=cjfff" 
```
