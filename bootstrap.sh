#!/usr/bin/env bash

# 定义颜色
RED="$(tput setaf 1)"
GREEN="$(tput setaf 2)"
YELLOW="$(tput setaf 3)"
BLUE="$(tput setaf 4)"
NORMAL="$(tput sgr0)"

function setup_dotfiles {
  echo "${BLUE}Cloning dotfiles...${NORMAL}"
# 克隆最新的提交记录到本地，而不是所有的历史记录
  git clone --depth 1 https://github.com/awyugan/dotfiles.git "$HOME"/dotfiles
#// 这一行改为你的仓库链接
}

function bootstrap {
  echo "${BLUE}Setting up dotfiles...${NORMAL}"
  source "$HOME"/dotfiles/bin/csys # 检查系统版本，系统路径
  case "$OSTYPE" in
  darwin*)
    source "$HOME"/dotfiles/scripts/bootstrap_mac.sh
    ;;
  linux*)
    if [[ "$(uname -m)" == *armv7l* ]]; then
      echo "${RED}Unsupported system architecture.${NORMAL}"
    elif [[ "$(uname -m)" == *x86_64* ]]; then
      echo "${RED}Unsupported system architecture.${NORMAL}"
    else
      echo "${RED}Unsupported system architecture.${NORMAL}"
    fi
    ;;
  msys*)
    echo "${RED}Unsupported system architecture.${NORMAL}"
    ;;
  *)
    echo "${RED}unknown: $OSTYPE${NORMAL}"
    ;;
  esac
}

while getopts ":a:b:f:h" opt; do
  case $opt in
  a)
    echo "Option -a: $OPTARG"
    ;;
  b)
    echo "Option -b: $OPTARG"
    ;;
  f)
    MODE="force"
    ;;
  h)
    echo "Usage: bootstrap.sh [-f] [-h]"
    exit 0
    ;;
  \?)
    # 如果用户提供了无效选项，请显示错误消息并退出
    echo "Invalid option: -$OPTARG"
    exit 1
    ;;
  :)
    # 如果用户提供不带参数的选项，则显示错误消息并退出
    echo "Option -$OPTARG requires an argument"
    exit 1
    ;;
  esac
done

# 将选项向左移动，以便剩余参数存储在 $@ 中
shift $((OPTIND - 1))

# 对剩下的参数做一些事情
echo "Remaining arguments: $*"

if [[ $MODE == "force" ]]; then
  rm -rf "$HOME"/dotfiles
  bootstrap
else
  echo "${RED}这将覆盖您主目录中的现有文件。你确定吗? (y/n)${NORMAL}"
  read -r
  if [[ $REPLY =~ ^[Yy] ]]; then
    if [ -d "$HOME"/dotfiles ]; then
      echo "${YELLOW}您已经安装了点文件。${NORMAL}"
      echo "${GREEN}请删除 $HOME/dotfiles 如果你想重新安装.${NORMAL}"
      exit
    else
      setup_dotfiles
      bootstrap
    fi
  else
    echo "${YELLOW}退出中...${NORMAL}"
  fi
fi
