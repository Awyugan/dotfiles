#===============================================================================
# 👇 completions
# 👇 如果您使用了自定义的compinit设置和ZSH框架，请确保compinit在框架源代码之后
#===============================================================================
case $SYSTEM_TYPE in
mac_arm64 | mac_x86_64)
  #===============================================================================
  # 👇 1password completions
  # 👇 1password 自动补全设置
  #===============================================================================
  # eval "$(op completion zsh)"
  # compdef _op op

  #===============================================================================
  # 👇 cz completions
  # 👇 cz 自动补全设置
  #===============================================================================
   eval "$(register-python-argcomplete cz)"

  #===============================================================================
  # 👇 pipx completions
  # 👇 pipx 自动补全设置
  #===============================================================================
  # eval "$(register-python-argcomplete pipx)"
  ;;
esac
#//[oh-my-zsh] Insecure completion-dependent directories detected: