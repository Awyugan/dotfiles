#!/usr/bin/env bash

# 定义主函数
function main {
  # 输出安装oh-my-zsh的信息
  echo "${BLUE}Installing oh-my-zsh${NORMAL}"
  # 设置不更改默认shell
  export CHSH=no
  # 设置不运行zsh
  export RUNZSH=no
  # 设置保持现有的zsh配置文件
  export KEEP_ZSHRC=yes
  # 执行oh-my-zsh的安装脚本
  sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" --unattended --keep-zshrc

  # 输出安装zsh配置文件的信息
  echo "${BLUE}Installing zsh dotiles${NORMAL}"
  # 如果存在.zshrc文件，将其重命名为.zshrc.bak并复制新的配置文件，否则直接复制新的配置文件
  if [ -e "$HOME"/.zshrc ]; then
    mv "$HOME"/.zshrc "$HOME"/.zshrc.bak
    cp "$HOME"/dotfiles/config/shell/mac/zshrc.sh "$HOME"/.zshrc
  else
    cp "$HOME"/dotfiles/config/shell/mac/zshrc.sh "$HOME"/.zshrc
  fi
  # 如果存在.zprofile文件，将其重命名为.zprofile.bak并复制新的配置文件，否则直接复制新的配置文件
  if [ -e "$HOME"/.zprofile ]; then
    mv "$HOME"/.zprofile "$HOME"/.zprofile.bak
    cp "$HOME"/dotfiles/config/shell/mac/zprofile.sh "$HOME"/.zprofile
  else
    cp "$HOME"/dotfiles/config/shell/mac/zprofile.sh "$HOME"/.zprofile
  fi

  # 输出安装zsh插件的信息
  echo "${BLUE}Installing zsh plugins${NORMAL}"
  # 设置ZSH_CUSTOM变量，如果未设置则使用默认值
  ZSH_CUSTOM=${ZSH_CUSTOM:-~/.oh-my-zsh/custom}
  # 克隆各种zsh插件到指定目录
  git clone https://github.com/TamCore/autoupdate-oh-my-zsh-plugins "$ZSH_CUSTOM"/plugins/autoupdate
  git clone https://github.com/wfxr/forgit "$ZSH_CUSTOM"/plugins/forgit
  git clone https://github.com/Aloxaf/fzf-tab "$ZSH_CUSTOM"/plugins/fzf-tab
  git clone https://github.com/paulirish/git-open.git "$ZSH_CUSTOM"/plugins/git-open
  git clone https://github.com/zsh-users/zsh-autosuggestions "$ZSH_CUSTOM"/plugins/zsh-autosuggestions
  git clone https://github.com/zsh-users/zsh-completions "$ZSH_CUSTOM"/plugins/zsh-completions
  git clone https://github.com/sukkaw/zsh-osx-autoproxy "$ZSH_CUSTOM"/plugins/zsh-osx-autoproxy
  git clone https://github.com/zsh-users/zsh-syntax-highlighting.git "$ZSH_CUSTOM"/plugins/zsh-syntax-highlighting
  git clone https://github.com/jeffreytse/zsh-vi-mode "$ZSH_CUSTOM"/plugins/zsh-vi-mode

  # 输出安装Homebrew的信息
  echo "${BLUE}Installing Homebrew${NORMAL}"
  # 如果未安装brew，则执行brew的安装脚本
  which brew || NONINTERACTIVE=1 /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

  # 输出安装Homebrew包的信息
  echo "${BLUE}Installing Homebrew packages${NORMAL}"
  # 根据系统架构设置Homebrew的环境变量
  case $SYSTEM_ARCH in
  arm64*)
    eval "$(/opt/homebrew/bin/brew shellenv)"
    ;;
  x86_64*)
    eval "$(/usr/local/homebrew/bin/brew shellenv)"
    ;;
  *)
    echo "unknown: $SYSTEM_ARCH"
    ;;
  esac
  # 安装指定的Homebrew包
  brew bundle --file="$HOME"/dotfiles/assets/others/packages/Brewfile_dev

  # 输出安装mackup的信息，Macup已经在上一步安装了
  echo "${BLUE}Installing mackup${NORMAL}"
  # 创建指向mackup配置文件的符号链接
  ln -sf "$HOME"/dotfiles/config/mackup/.mackup.cfg "$HOME"/.mackup.cfg
  ln -sf "$HOME"/dotfiles/config/mackup/.mackup "$HOME"/.mackup

  # 输出恢复配置文件的信息
  echo "${BLUE}Restoring dotfiles${NORMAL}"
  # 如果MODE变量为force，则强制恢复配置文件，否则正常恢复
  if [ "$MODE" == "force" ]; then
    mackup restore --force
  else
    mackup restore
  fi

  # 输出安装asdf的信息
  echo "${BLUE}Installing asdf${NORMAL}"
  # 添加各种asdf插件
  asdf plugin-add clojure https://github.com/asdf-community/asdf-clojure.git
  asdf plugin-add crystal https://github.com/asdf-community/asdf-crystal.git
  asdf plugin-add elixir https://github.com/asdf-vm/asdf-elixir.git
  asdf plugin-add golang https://github.com/kennyp/asdf-golang.git
  asdf plugin-add java https://github.com/halcyon/asdf-java.git
  asdf plugin-add lua https://github.com/Stratus3D/asdf-lua.git
  asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
  asdf plugin-add python
  asdf plugin-add ruby https://github.com/asdf-vm/asdf-ruby.git
  asdf plugin-add rust https://github.com/asdf-community/asdf-rust.git
  # 安装asdf插件指定的程序版本
  asdf install

  # 输出reshiming asdf的信息
  echo "${BLUE}Reshiming asdf${NORMAL}"
  # 重新生成asdf shims
  asdf reshim

  # 输出安装cargo包的信息
  echo "${BLUE}Installing cargo packages${NORMAL}"
  # 读取cargo_dev.txt文件，并执行cargo install命令安装包
  xargs <"$HOME"/dotfiles/assets/others/packages/cargo_dev.txt -n 1 cargo install

  # 输出安装npm包的信息
  echo "${BLUE}Installing npm packages${NORMAL}"
  # 读取npm_dev.txt文件，并执行npm install命令安装包
  xargs npm install --location=global <"$HOME"/dotfiles/assets/others/packages/npm_dev.txt

  # 输出安装pipx包的信息
  echo "${BLUE}Installing pipx packages${NORMAL}"
  # 读取pipx_dev.txt文件，并执行pipx install命令安装包
  xargs <"$HOME"/dotfiles/assets/others/packages/pipx_dev.txt -n 1 pipx install

  # 输出安装其他包的信息
  echo "${BLUE}Installing other packages${NORMAL}"

  # 输出安装tmux配置的信息
  echo "${BLUE}Installing tmux configuration (oh-my-tmux)${NORMAL}"
  # 克隆oh-my-tmux仓库并创建指向配置文件的符号链接
  git clone https://github.com/gpakosz/├── README.md
├── mackup
└── shell
    ├── init.sh
    ├── mac
    │   ├── zprofile.sh
    │   └── zshrc.sh
    ├── zsh_aliases.sh
    ├── zsh_completion
    │   ├── _cheat
    │   └── _rustup
    ├── zsh_completion.sh
    ├── zsh_env.sh
    └── zsh_functions.sh.git "$HOME"/.tmux
  ln -sf "$HOME"/.tmux/.tmux.conf "$HOME"/.tmux.conf

  # 输出安装emacs配置的信息
  echo "${BLUE}Installing emacs configuration (Doom Emacs)${NORMAL}"
  # 克隆Doom Emacs仓库并执行安装命令
  git clone --depth 1 https://github.com/doomemacs/doomemacs ~/.emacs.d
  ~/.emacs.d/bin/doom install
}

# 根据系统架构输出相应的信息
case $SYSTEM_ARCH in
arm64*)
  echo "${BLUE}Installing dotfiles for macOS (Apple chips)${NORMAL}"
  ;;
x86_64*)
  echo "${BLUE}Installing dotfiles for macOS (Intel chips)${NORMAL}"
  ;;
*)
  echo "unknown $SYSTEM_ARCH"
  ;;
esac

# 调用主函数
main

# 根据系统架构输出相应的信息
case $SYSTEM_ARCH in
arm64*)
  echo ""
  ;;
x86_64*)
  echo ""
  # 提醒用户检查init.sh中miniforge的路径
  echo "${YELLOW}Please check the path to miniforge in init.sh${NORMAL}"
  ;;
*)
  echo ""
  # 输出未知架构的信息
  echo "${RED}unknown: $(uname -m)${NORMAL}"
  ;;
esac

# 输出完成的信息
echo "${GREEN}Done${NORMAL}"
# 提示用户如何安装VS Code插件
echo "${GREEN}You can install the VS Code plugin by running the following command.${NORMAL}"
echo "${GREEN}xargs <""$HOME""/dotfiles/assets/others/packages/vscode_extensions.txt -n 1 code --install-extension${NORMAL}"
