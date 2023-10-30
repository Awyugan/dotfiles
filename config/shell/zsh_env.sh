#===============================================================================
# 👇 Fig pre block. Keep at the top of this file.保留在文件的顶部。
#===============================================================================
# [[ -f "$HOME/.fig/shell/zshrc.pre.zsh" ]] && builtin source "$HOME/.fig/shell/zshrc.pre.zsh"

#===============================================================================
# 👇 GPG Signing
#===============================================================================
# if [ -r ~/.zshrc ]; then echo 'export GPG_TTY=$(tty)' >> ~/.zshrc; \
#   else echo 'export GPG_TTY=$(tty)' >> ~/.zprofile; fi

#===============================================================================
# 👇 oh-my-zsh init oh-my-zsh 初始化
#===============================================================================
export ZSH="${HOME}/.oh-my-zsh"

#===============================================================================
# 👇 zsh Theme
#===============================================================================
# 判断是否在SSH连接中，决定是否执行 starship 初始化
if [[ -n $SSH_CONNECTION ]]; then
  eval "$(starship init zsh)"
else
  eval "$(starship init zsh)"
fi

#===============================================================================
# 👇 zsh-vi-mode https://github.com/jeffreytse/zsh-vi-mode/issues/24 zsh-vi-mode 配置
#===============================================================================
export ZVM_INIT_MODE=sourcing

#===============================================================================
# 👇 Standard plugins can be found in $ZSH/plugins/
# 👇 Custom plugins may be added to $ZSH_CUSTOM/plugins/
# x <file> extract <file>
# showfiles show hidefiles
#===============================================================================
# 设置 zsh 插件
export plugins=(
  asdf
  colored-man-pages
  extract
  fd
  gh
  macos
  magic-enter
  systemadmin
  ripgrep
  zbell
  autoupdate              # https://github.com/TamCore/autoupdate-oh-my-zsh-plugins
  forgit                  # https://github.com/wfxr/forgit
  git-open                # https://github.com/paulirish/git-open
  zsh-autosuggestions     # https://github.com/zsh-users/zsh-autosuggestions
  zsh-completions         # https://github.com/zsh-users/zsh-completions
  zsh-syntax-highlighting # https://github.com/zsh-users/zsh-syntax-highlighting
  # zsh-vi-mode             # https://github.com/jeffreytse/zsh-vi-mode
  # zsh-osx-autoproxy       # https://github.com/sukkaw/zsh-osx-autoproxy
)

#===============================================================================
# 👇 Language environment 语言环境设置
#===============================================================================
export LANG=en_US.UTF-8

#===============================================================================
# 👇 Cheat
#===============================================================================
export CHEAT_USE_FZF=true

#===============================================================================
# 👇 History 历史记录设置
#===============================================================================
export HIST_STAMPS="yyyy-mm-dd"
export HISTFILE="$HOME/.zsh_history"
export HISTSIZE=1000000
export SAVEHIST=$HISTSIZE
setopt EXTENDED_HISTORY
setopt INC_APPEND_HISTORY # Write to the history file immediately, not when the shell exits.

#===============================================================================
# 👇 oh-my-zsh autoupdate-zsh-plugin
#===============================================================================
export UPDATE_ZSH_DAYS=42

#===============================================================================
# 👇 oh-my-zsh init
#===============================================================================
source "$ZSH"/oh-my-zsh.sh

#===============================================================================
# 👇 fzf-tab https://github.com/Aloxaf/fzf-tab/wiki/Configuration
# 👇 fzf-tab needs to be loaded after compinit (oh-my-zsh.sh)
#===============================================================================
source "$ZSH_CUSTOM"/plugins/fzf-tab/fzf-tab.plugin.zsh
zstyle ':fzf-tab:complete:cd:*' fzf-preview 'lsd --icon=always $realpath'
zstyle ':fzf-tab:*' fzf-pad 10

#===============================================================================
# 👇 gcloud 自定义键绑定
#===============================================================================
#case $SYSTEM_TYPE in
#mac_arm64 | mac_x86_64)
#  source "$(brew --prefix)/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/completion.zsh.inc"
#  source "$(brew --prefix)/Caskroom/google-cloud-sdk/latest/google-cloud-sdk/path.zsh.inc"
#  ;;
#esac

#===============================================================================
# 👇 colima & docker
# export DOCKER_HOST="unix://${HOME}/.colima/default/docker.sock"
#===============================================================================

#===============================================================================
# 👇 orbstack & docker
# docker context use colima
# docker context use orbstack
#===============================================================================

#===============================================================================
# 👇 custom binary
#===============================================================================
export PATH="${HOME}/dotfiles/bin:$PATH"

#===============================================================================
# 👇 custom keybindings
#===============================================================================
# 👇 fzf
case $SYSTEM_TYPE in
mac_arm64)
  source "$(brew --prefix fzf)/shell/completion.zsh"
  source "$(brew --prefix fzf)/shell/key-bindings.zsh"
  ;;
mac_x86_64)
  source "$(brew --prefix fzf)/shell/completion.zsh"
  source "$(brew --prefix fzf)/shell/key-bindings.zsh"
  ;;
linux_x86_64)
  source "$(brew --prefix fzf)/shell/completion.zsh"
  source "$(brew --prefix fzf)/shell/key-bindings.zsh"
  ;;
esac
# 👇 Option-S
bindkey '^S' sudo-command-line
# 👇 Option-C
bindkey 'ç' fzf-cd-widget
# 👇 Option-X
bindkey '≈' fzf-dirs-widget
# 👇 Ctrl-L accept zsh-autosuggestions https://github.com/zsh-users/zsh-autosuggestions#key-bindings
bindkey '^L' autosuggest-accept
# 👇 Ctrl-G
bindkey '^g' _navi_widget
# 👇 Alt-Left
bindkey "^[[1;3C" forward-word
# 👇 Alt-Right
bindkey "^[[1;3D" backward-word

#===============================================================================
# 👇 forgit
#===============================================================================
# forgit_log=glo
# forgit_diff=gd
# forgit_add=ga
# forgit_reset_head=grh
# forgit_ignore=gi
# forgit_checkout_file=gcf
# forgit_checkout_branch=gcb
# forgit_branch_delet=gbd
# forgit_checkout_tag=gct
# forgit_checkout_commit=gco
# forgit_revert_commit=grc
# forgit_clean=gclean
# forgit_stash_show=gss
# forgit_cherry_pick=gcp
# forgit_rebase=grb
# forgit_fixup=gfu
FORGIT_INSTALL_DIR="$ZSH_CUSTOM"/plugins/forgit
export PATH="$PATH:$FORGIT_INSTALL_DIR/bin"

#===============================================================================
# 👇 fzf
#===============================================================================
export FZF_DEFAULT_OPTS="--height=100% --layout=reverse --info=inline --border --margin=1 --padding=1"
export FZF_DEFAULT_COMMAND="fd --ignore-file ~/.rgignore --hidden --follow --ignore-case ."

#===============================================================================
# 👇 fzf Ctrl-T to fuzzily search for a file or directory in your home directory then insert its path at the cursor
#===============================================================================
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"

#===============================================================================
# 👇 fzf Option-C 快速查找目录 fuzzily search for a directory in your home directory then cd into it
#===============================================================================
export FZF_ALT_C_COMMAND="fd --ignore-file ~/.rgignore --hidden --follow --ignore-case --type d"

#===============================================================================
# 👇 doom-emacs binary
#===============================================================================
export PATH="${HOME}/.emacs.d/bin:$PATH"

#===============================================================================
# 👇 Preferred editor for local and remote sessions
#===============================================================================
if [[ -n $SSH_CONNECTION ]]; then
  export EDITOR='nvim'
else
  export EDITOR='nvim'
  # export EDITOR="emacsclient -t -a=\"\""
  # export EDITOR='code'
fi

#===============================================================================
# 👇 iTerm2 https://iterm2.com/documentation-shell-integration.html
#===============================================================================
test -e "${HOME}/.iterm2_shell_integration.zsh" && source "${HOME}/.iterm2_shell_integration.zsh"

#===============================================================================
# 👇 qt5
#===============================================================================
# export PATH="$(brew --prefix qt@5)/bin:$PATH"
# export LDFLAGS="-L$(brew --prefix qt@5)/lib"
# export CPPFLAGS="-I$(brew --prefix qt@5)/include"
# export PKG_CONFIG_PATH="$(brew --prefix qt@5)/lib/pkgconfig"

#===============================================================================
# 👇 direnv
#===============================================================================
eval "$(direnv hook bash)"

#===============================================================================
# 👇 thefuck
#===============================================================================
eval "$(thefuck --alias)"

#===============================================================================
# 👇 Sourcegraph
#===============================================================================
# export SRC_ACCESS_TOKEN=my-token
# export SRC_ENDPOINT=https://sourcegraph.example.com

#===============================================================================
# 👇 broot
#===============================================================================
source "${HOME}/.config/broot/launcher/bash/br" || broot --install

#===============================================================================
# 👇 puppeteer
#===============================================================================
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export PUPPETEER_EXECUTABLE_PATH=$(brew --prefix)/bin/chromium

#===============================================================================
# 👇 tumxp
#===============================================================================
export DISABLE_AUTO_TITLE='true'

#===============================================================================
# 👇 bat
#===============================================================================
export BAT_THEME="OneHalfDark"

#===============================================================================
# 👇 LLVM
#===============================================================================
export PATH="$(brew --prefix llvm)/bin:${PATH}"
export LDFLAGS="-L$(brew --prefix llvm)/lib"
export CPPFLAGS="-I$(brew --prefix llvm)/include"

#===============================================================================
# 👇 Mojo
#===============================================================================
export MODULAR_HOME="$HOME/.modular"
export PATH="$MODULAR_HOME/pkg/packages.modular.com_mojo/bin:$PATH"

#===============================================================================
# 👇 navi
# 👇 eval "$(navi widget zsh)"
#===============================================================================
_navi_call() {
  local result="$(navi "$@" </dev/tty)"
  printf "%s" "$result"
}

_navi_widget() {
  local -r input="${LBUFFER}"
  local -r last_command="$(echo "${input}" | navi fn widget::last_command)"
  local replacement="$last_command"

  if [ -z "$last_command" ]; then
    replacement="$(_navi_call --print)"
  elif [ "$LASTWIDGET" = "_navi_widget" ] && [ "$input" = "$previous_output" ]; then
    replacement="$(_navi_call --print --query "$last_command")"
  else
    replacement="$(_navi_call --print --best-match --query "$last_command")"
  fi

  if [ -n "$replacement" ]; then
    local -r find="${last_command}_NAVIEND"
    previous_output="${input}_NAVIEND"
    previous_output="${previous_output//$find/$replacement}"
  else
    previous_output="$input"
  fi

  zle kill-whole-line
  LBUFFER="${previous_output}"
  region_highlight=("P0 100 bold")
  zle redisplay
}

zle -N _navi_widget
# bindkey '^g' _navi_widget

#===============================================================================
# 👇 zoxide
#===============================================================================
eval "$(zoxide init zsh)"

#===============================================================================
# 👇 autodetect architecture (and set `brew` path) (and set `python` path)
#===============================================================================
case $SYSTEM_TYPE in
mac_arm64)
  # python
  alias 'cvenv'='$(brew --prefix python@3.11)/bin/python3.11 -m venv .venv && source .venv/bin/activate && python3 -m pip install --upgrade -r $HOME/.requirements.txt'
  alias 'svenv'='source .venv/bin/activate'
  alias 'cenv'='conda create --prefix ./.env && conda activate ./.env'
  alias 'senv'='conda activate ./.env'
  # python miniforge
  # >>> conda initialize >>>
  # !! Contents within this block are managed by 'conda init' !!
  if ! __conda_setup="$('/opt/homebrew/Caskroom/miniforge/base/bin/conda' 'shell.zsh' 'hook' 2>/dev/null)"; then
    eval "$__conda_setup"
  else
    if [ -f "/opt/homebrew/Caskroom/miniforge/base/etc/profile.d/conda.sh" ]; then
      . "/opt/homebrew/Caskroom/miniforge/base/etc/profile.d/conda.sh"
    else
      export PATH="/opt/homebrew/Caskroom/miniforge/base/bin:$PATH"
    fi
  fi
  unset __conda_setup
  # <<< conda initialize <<<
  # java
  export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home
  ;;
mac_x86_64)
  # brew
  if [[ -f /usr/local/homebrew/bin/brew ]]; then
    eval "$(/usr/local/homebrew/bin/brew shellenv)" # homebrew intel shell env
  fi
  # python
  eval "$(pyenv init --path)" # pyenv intel shell env
  eval "$(pyenv init -)"      # pyenv intel shell env
  alias 'cvenv'='python3 -m venv .venv && source .venv/bin/activate && python3 -m pip install --upgrade -r $HOME/.requirements.txt'
  alias 'svenv'='source .venv/bin/activate'
  # python miniconda
  ;;
linux_x86_64)
  # python
  alias 'cvenv'='python3 -m venv .venv && source .venv/bin/activate && python3 -m pip install --upgrade -r $HOME/.requirements.txt'
  alias 'svenv'='source .venv/bin/activate'
  ;;
esac

#===============================================================================
# 👇 Fig post block. Keep at the bottom of this file.
#===============================================================================
# [[ -f "$HOME/.fig/shell/zshrc.post.zsh" ]] && builtin source "$HOME/.fig/shell/zshrc.post.zsh"
