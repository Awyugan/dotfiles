#!/usr/bin/env bash

set -e  # 退出当任何命令失败时

echo "Testing Git"  # 输出 "Testing Git"
test -x "$(which git)"  # 检查 git 是否可执行

# echo "Testing Python"  # 输出 "Testing Python"（当前注释掉）
# test -x "$(which python3)"  # 检查 python3 是否可执行（当前注释掉）
# python3 --version | grep --fixed-strings "Python 3.10.4"  # 检查 python3 版本是否为 3.10.4（当前注释掉）
# which python3 | rg "shims"  # 检查 python3 路径中是否包含 "shims"（当前注释掉）

echo "Testing Go"  # 输出 "Testing Go"
test -x "$(which go version)"  # 检查 go version 是否可执行

echo "Testing ZSH"  # 输出 "Testing ZSH"
test -x "$(which zsh)"  # 检查 zsh 是否可执行
test -d "$HOME"/.oh-my-zsh  # 检查 ~/.oh-my-zsh 目录是否存在
# cat "$HOME"/.zshrc  # 输出 ~/.zshrc 文件内容（当前注释掉）
test -f "$HOME"/.zshrc  # 检查 ~/.zshrc 文件是否存在
# cat "$HOME"/.zprofile  # 输出 ~/.zprofile 文件内容（当前注释掉）
test -f "$HOME"/.zprofile  # 检查 ~/.zprofile 文件是否存在

echo "Testing Homebrew"  # 输出 "Testing Homebrew"
test -x "$(which brew)"  # 检查 brew 是否可执行

echo "Testing Mackup"  # 输出 "Testing Mackup"
test -f "$HOME"/.zshrc  # 检查 ~/.zshrc 文件是否存在
