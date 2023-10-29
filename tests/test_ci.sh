#!/usr/bin/env bash

set -e  # 这个命令告诉bash如果任何语句的执行结果不是true则应该退出

echo "Testing Git"  # 输出"Testing Git"到控制台
test -x "$(which git)"  # 检查git命令是否存在，并且是否可执行
