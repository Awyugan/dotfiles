#===============================================================================
# TODO
#===============================================================================
# 获取系统架构信息
SYSTEM_ARCH=$(uname -m)

# 根据系统类型和架构设置 SYSTEM_TYPE 变量
case "$OSTYPE" in
darwin*)  # MacOS 系统
  case $SYSTEM_ARCH in
  arm64*)
    SYSTEM_TYPE="mac_arm64"  # ARM64 架构
    ;;
  x86_64*)
    SYSTEM_TYPE="mac_x86_64"  # x86_64 架构
    ;;
  *)
    SYSTEM_TYPE="unknown"  # 未知架构
    ;;
  esac
  ;;
linux*)  # Linux 系统
  case $SYSTEM_ARCH in
  x86_64*)
    SYSTEM_TYPE="linux_x86_64"  # x86_64 架构
    ;;
  *armv7l*)
    SYSTEM_TYPE="raspberry"  # Raspberry Pi
    ;;
  *)
    SYSTEM_TYPE="unknown"  # 未知架构
    ;;
  esac
  ;;
msys*)  # Windows 系统 (MSYS)
  SYSTEM_TYPE="unknown"  # 未知架构
  ;;
*)
  SYSTEM_TYPE="unknown"  # 未知架构
  ;;
esac

# 导出 SYSTEM_TYPE 环境变量
export SYSTEM_TYPE

#===============================================================================
# 👇 评估 homebrew shell环境
#===============================================================================
# 根据不同的系统类型和架构，评估 Homebrew 的 shell 环境
case $SYSTEM_TYPE in
mac_arm64)
  eval "$(/opt/homebrew/bin/brew shellenv)"  # Mac ARM64 架构
  ;;
mac_x86_64)
  eval "$(/usr/local/homebrew/bin/brew shellenv)"  # Mac x86_64 架构
  ;;
linux_x86_64)
  eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"  # Linux x86_64 架构
  ;;
unknown)
  echo "${RED}Unsupported system architecture.${NORMAL}"  # 未知架构
  ;;
esac

#===============================================================================
# 👇 导出 homebrew & pipx & other binaries
#===============================================================================
# 更新 PATH 环境变量，添加额外的二进制文件路径
export PATH="$PATH:${HOME}/.local/bin"
