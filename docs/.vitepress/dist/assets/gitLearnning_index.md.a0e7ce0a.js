import{_ as s,o as n,c as a,b as l}from"./app.dc7d75ba.js";const g=JSON.parse('{"title":"Git 学习笔记","description":"","frontmatter":{},"headers":[{"level":2,"title":"基础说明","slug":"基础说明","link":"#基础说明","children":[]}],"relativePath":"gitLearnning/index.md"}'),e={name:"gitLearnning/index.md"},p=l(`<h1 id="git-学习笔记" tabindex="-1">Git 学习笔记 <a class="header-anchor" href="#git-学习笔记" aria-hidden="true">#</a></h1><h2 id="基础说明" tabindex="-1">基础说明 <a class="header-anchor" href="#基础说明" aria-hidden="true">#</a></h2><div class="language-git line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">git</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">git init # 初始化git仓库</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote add origin &lt;仓库地址&gt; # 添加仓库地址映射</span></span>
<span class="line"><span style="color:#A6ACCD;">git remote remove origin # 删除地址映射</span></span>
<span class="line"><span style="color:#A6ACCD;">git add . # 工作目录内容添加进索引区域</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit -m &#39;&#39; # 生成新的commit，commit对应某个时刻的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend # 可用来重写commit的message，也可以用来当作commit的压缩手段</span></span>
<span class="line"><span style="color:#A6ACCD;">git commit --amend --reset-author # 可用来重写commit的作者</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git restore &lt;name&gt; # 当改动了工作区的内容时，可以使用该命令来丢弃工作区的改动</span></span>
<span class="line"><span style="color:#A6ACCD;">git restore --staged &lt;name&gt; # 把已经通过git add添加的内容从缓存区去除</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset --hard HEAD^ # 回退到上一个commit</span></span>
<span class="line"><span style="color:#A6ACCD;">git reset head^ # 回退到上一个commit，区别时之前commit修改的内容并不会消失，而是保存在工作目录中</span></span>
<span class="line"><span style="color:#A6ACCD;">git revert HEAD # 回退当前commit</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git branch # 显示所有分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch &lt;name&gt; # 创建分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -m &lt;nameA&gt; &lt;nameB&gt; # 修改分支名</span></span>
<span class="line"><span style="color:#A6ACCD;">git branch -D &lt;name&gt; # 删除本地分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout &lt;name&gt; # 切换分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout - # 切换到上一个分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git checkout -b &lt;name&gt; # 创建分支并切换过去</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git merge &lt;name&gt; # 合并目标分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase &lt;name&gt; # 合并目标分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git fetch # 获取所有分支</span></span>
<span class="line"><span style="color:#A6ACCD;">git pull origin main # 获取所有分支并进行当前分支的合并（合并有三种策略，merge（默认），rebase，只允许fast-forward的merge）</span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin main # 推送分支  </span></span>
<span class="line"><span style="color:#A6ACCD;">git push origin test --delete # 删除远程分支</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git log # 查看commit记录</span></span>
<span class="line"><span style="color:#A6ACCD;">git reflog # 查看历史git命令</span></span>
<span class="line"><span style="color:#A6ACCD;">git status # 看到当前状态</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash # 暂存工作区的修改</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash list # 查看已stash的内容</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash pop 0 # 释放最新stash的内容到工作区</span></span>
<span class="line"><span style="color:#A6ACCD;">git stash clear # 清空暂存区的内容</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git cherry-pick &lt;commit&gt; # cherry-pick 某个提交的代码</span></span>
<span class="line"><span style="color:#A6ACCD;">git rebase -i origin/main # 可以用来squash commit、删除commit以及其他的操作</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">git tag # 查看所有tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag v1.0.1 # 给当前commit打tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag v1.0.1 &lt;commit&gt; # 给某个commit打tag</span></span>
<span class="line"><span style="color:#A6ACCD;">git tag --delete v1.0.1 # 删除tag v1.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>`,3),t=[p];function i(r,c,o,m,b,A){return n(),a("div",null,t)}const u=s(e,[["render",i]]);export{g as __pageData,u as default};
