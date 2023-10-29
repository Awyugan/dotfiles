#===============================================================================
# TODO
#===============================================================================
SYSTEM_ARCH=$(uname -m)
# 获取系统架构信息

# 根据操作系统类型和架构设置SYSTEM_TYPE变量
case "$OSTYPE" in
darwin*)
  case $SYSTEM_ARCH in
  arm64*)
    SYSTEM_TYPE="mac_arm64"
    ;;
  x86_64*)
    SYSTEM_TYPE="mac_x86_64"
    ;;
  *)
    SYSTEM_TYPE="unknown"
    ;;
  esac
  ;;
linux*)
  case $SYSTEM_ARCH in
  x86_64*)
    SYSTEM_TYPE="linux_x86_64"
    ;;
  *armv7l*)
    SYSTEM_TYPE="raspberry"
    ;;
  *)
    SYSTEM_TYPE="unknown"
    ;;
  esac
  ;;
msys*)
  SYSTEM_TYPE="unknown"
  ;;
*)
  SYSTEM_TYPE="unknown"
  ;;
esac

export SYSTEM_TYPE # 导出SYSTEM_TYPE变量，使其在子进程中可用

#===============================================================================
# 👇 zprof
# 👇 在 ~/.zshrc 的头部加上这个，加载 profile 模块
#===============================================================================
# zmodload zsh/zprof
# 加载zsh的profile模块，用于分析shell启动时间
#===============================================================================
# 👇 init
#===============================================================================
RED="$(tput setaf 1)"
# 设置红色文本格式
if [ -z "$_INIT_SH_LOADED" ]; then
  _INIT_SH_LOADED=1
else
  return
fi
# 避免init.sh被重复加载
ZSH_CUSTOM=${ZSH_CUSTOM:-~/.oh-my-zsh/custom}
# 设置Oh My Zsh的自定义目录路径
#===============================================================================
# 👇 custom completions
# 👇 Oh My Zsh will call compinit for you
#===============================================================================
FPATH="$(brew --prefix)/share/zsh/site-functions:$FPATH" # 添加Homebrew的zsh补全路径
FPATH="$HOME/dotfiles/config/shell/zsh_completion:$FPATH" # 添加自定义zsh补全路径
FPATH="$ZSH_CUSTOM/plugins/zsh-completions/src:$FPATH" # 添加Oh My Zsh补全插件的路径

#===============================================================================
# 👇 env 环境变量
#===============================================================================
case $SYSTEM_TYPE in # 根据系统类型加载对应的环境变量和函数
mac_arm64 | mac_x86_64 | linux_x86_64 | raspberry)
  if [ -n "$BASH_VERSION" ] || [ -n "$ZSH_VERSION" ]; then
    # run script for interactive mode of bash/zsh
    if [[ $- == *i* ]] && [ -z "$_INIT_SH_NOFUN" ]; then
      if [ -f "$HOME/dotfiles/config/shell/zsh_env.sh" ]; then
        . "$HOME/dotfiles/config/shell/zsh_env.sh"
      fi
      if [ -f "$HOME/dotfiles/config/shell/zsh_env_private.sh" ]; then
        . "$HOME/dotfiles/config/shell/zsh_env_private.sh"
      fi
      if [ -f "$HOME/dotfiles/config/shell/zsh_functions.sh" ]; then
        . "$HOME/dotfiles/config/shell/zsh_functions.sh"
      fi
      if [ -f "$HOME/dotfiles/config/shell/zsh_aliases.sh" ]; then
        . "$HOME/dotfiles/config/shell/zsh_aliases.sh"
      fi
      if [ -f "$HOME/dotfiles/config/shell/zsh_completion.sh" ]; then
        . "$HOME/dotfiles/config/shell/zsh_completion.sh"
      fi
    fi
  fi
  ;;
unknown)
  echo "${RED}Unsupported system architecture.${NORMAL}"
  ;;
esac

#===============================================================================
# 👇 zprof
#===============================================================================
# zprof # 启用zprof，分析zsh启动和执行时间
