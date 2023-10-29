# 脚本

Mac系统主要使用[bootstrap_mac.sh](bootstrap_mac.sh)

## 仪表板配置和执行指南

本仓库包含了两个仪表板会话的配置文件，`dashboard_0` 和 `dashboard_1`，每个会话都有其自己的窗格，运行指定的命令。

### 文件结构

- [tmuxp](/scripts/tmuxp)
	- `dashboard_0.yaml`: `dashboard_0` 会话的配置文件。
	- `dashboard_1.yaml`: `dashboard_1` 会话的配置文件。
- [yacron](/scripts/yacron)
	- `job_0.yaml`: 在 `dashboard_0.yaml` 中引用的 Yacron 任务配置文件。
	- `job_1.yaml`，暂未使用
- `bootstrap_mac.sh`：见下方[Dotfiles Bootstrap 脚本](## Dotfiles Bootstrap 脚本)
- `README.md`: 本文档。

### 运行仪表板

1. 确保你已安装必要的软件：
   - [tmux](https://github.com/tmux/tmux) 用于终端多路复用。执行一键命令`bootstrap.sh`时会自动安装.
   - [yacron](https://github.com/gjcarneiro/yacron) 用于运行 cron 任务（如果使用 `job_0.yaml`）。

2. 启动 tmux 会话并加载配置：
   ```
   tmux new-session -s dashboard_0 -c dashboard_0.yaml
   # 或
   tmux new-session -s dashboard_1 -c dashboard_1.yaml
   ```

3. 一旦进入 tmux 会话，指定的窗格和命令将自动运行。要获取有关配置和自定义 tmux 或 yacron 的更多详细信息，请参阅各自的文档。

## Dotfiles Bootstrap 脚本

这个脚本可以帮助你在 macOS 系统上快速设置和安装你的开发环境和常用软件。

### 功能

1. 安装 [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh) 以及相关的 zsh 配置文件。
2. 安装一系列实用的 zsh 插件。
3. 安装 [Homebrew](https://brew.sh/) 并通过 Brewfile 安装常用的开发工具和软件。
4. 安装 [mackup](https://github.com/lra/mackup) 并恢复你的配置文件。
5. 安装 [asdf](https://asdf-vm.com/#/) 版本管理器以及一系列语言插件，并安装指定版本的语言运行时。
6. 安装一些常用的 cargo, npm, 和 pipx 包。
7. 安装 [oh-my-tmux](https://github.com/gpakosz/.tmux) 和 [Doom Emacs](https://github.com/hlissner/doom-emacs) 的配置。

### 使用方法

1. 克隆这个仓库到你的本地机器上。
2. 打开终端，进入到这个仓库的目录。
3. 运行 `bash bootstrap.sh`。
4. 根据脚本的提示操作。

### 注意事项

- 在运行这个脚本之前，请确保你已经备份了你的个人数据和配置文件，以防止任何不可预见的错误发生。
- 这个脚本默认是为 macOS 设计的，如果你想在其他系统上运行，可能需要做一些适配。
- 运行脚本可能需要一些时间，请耐心等待。

### 自定义

你可以根据你的需要修改脚本中的内容，例如添加或删除某些软件的安装命令，或者修改配置文件的路径等。

### 贡献

如果你发现了任何错误或者有任何建议，欢迎提交 Issue 或者 Pull Request。

## 许可

本项目采用 MIT 许可证，查看 [LICENSE](LICENSE) 文件以获得更多信息。
