<section class="report-hero reveal-on-scroll">
  <div class="hero-kicker">Half-Year Trend Review</div>
  <h1 class="report-title">半年趋势</h1>
  <p class="report-subtitle">聚焦 2025Q4 到 2026Q2 的关键公开信号，梳理图像编辑、视觉恢复与智能图像系统的阶段性变化。</p>
  <div class="report-stats">
    <div><span>时间窗口</span><strong>2025-10 至 2026-04</strong></div>
    <div><span>重点</span><strong>论文 / 产品 / 工程</strong></div>
    <div><span>主题</span><strong>推理、验证与闭环修复</strong></div>
  </div>
</section>

<section class="glance-strip reveal-on-scroll">
  <article class="glance-card">
    <span>阶段判断</span>
    <strong>主战场已从更大模型转向更强系统</strong>
    <p>近期领先方案强调多轮编辑、验证前置、局部修复与状态管理，而不只是继续扩大单模型规模。</p>
  </article>
  <article class="glance-card">
    <span>行业主线</span>
    <strong>理解、生成、编辑正在走向统一</strong>
    <p>统一模型仍是主航道，但保真约束、局部修复和验证链路开始被明确拆出。</p>
  </article>
  <article class="glance-card">
    <span>最重要变化</span>
    <strong>智能体式恢复正在成型</strong>
    <p>恢复任务越来越像一个决策问题，涉及感知、规划、验证、反思与再编辑。</p>
  </article>
</section>

## 核心结论

如果只看最近半年，图像编辑和图像恢复的核心变化可以归纳成五条：

1. `推理增强编辑`
   模型不只要会改图，还要能解释步骤、判断风险并在必要时自检。
2. `多轮会话式编辑`
   产品能力从一次性 prompt 走向带状态、多轮追问和持续修正。
3. `验证器前置`
   verifier 开始进入编辑过程，负责局部真实性、结构一致性和指令对齐。
4. `智能体式恢复`
   restoration 正在被重写成带规划、调度、反思和再规划的系统任务。
5. `统一理解-生成-编辑，同时保留保真控制通路`
   大方向是统一模型，小方向是必须单独保留 appearance 与 fidelity 的控制路径。

## 业界公开信号

### Gemini / Nano Banana

- `2025-11-20`：Google 发布 `Nano Banana Pro（Gemini 3 Pro Image）`
  来源：https://blog.google/technology/ai/nano-banana-pro/
  关键信号：更强推理与世界知识、4K 输出、清晰文字渲染与更高一致性控制。

- `2026-02-26`：Google DeepMind 发布 `Gemini 3.1 Flash Image` 模型卡
  来源：https://deepmind.google/models/model-cards/gemini-3-1-flash-image/
  关键信号：能力覆盖 `General Editing / Character Editing / Object-Environment Editing / Multi-Turn / Multi-Image`，并把 `Thinking + Text Search + Image Search` 放进评测组合。

判断：
Gemini 线已经从“会编辑图片”升级到“带推理和检索的图像系统”。

### OpenAI

- `2025-12-16`：OpenAI 发布 `ChatGPT Images / GPT-Image-1.5`
  来源：https://openai.com/index/new-chatgpt-images-is-here/
  关键信号：更精确的编辑控制、更稳定的连续编辑一致性、独立 Images 工作区与更快速度。

判断：
OpenAI 的公开方向更像“会话式图像工作台”，重点在连续编辑体验与上下文继承。

### Qwen / StepFun

- `2025-12-17`：`Step1X-Edit-v1p2` 公开可见
  来源：https://huggingface.co/stepfun-ai/models
  关键信号：强调一致性、LoRA 集成、工业设计与几何推理。

- `2025-12-17`：`Qwen-Image-Edit-2511` 首次公开 commit 可见
  来源：https://huggingface.co/Qwen/Qwen-Image-Edit-2511
  关键信号：明确强调 `mitigate image drift`、`character consistency`、`integrated LoRA` 与 `geometric reasoning`。

- `2025-12-31`：`Qwen-Image-2512` 公开页确认 December update
  来源：https://huggingface.co/Qwen/Qwen-Image-2512
  关键信号：更真实的人像、自然细节与更强文字渲染。

判断：
Qwen / StepFun 的路线很清楚，就是把“编辑理解合一”和“保真可控”做得更细。

### BFL / FLUX

- `2026-01-18`：BFL 文档把 `FLUX.2` 定义为最新一代推荐家族
  来源：https://help.bfl.ai/articles/9364115800-flux-models-overview

- `2026-03-03`：BFL Release Notes 宣布 `FLUX.2 [pro]` 在文本生成和图像编辑上约 `2x faster`
  来源：https://docs.bfl.ai/release-notes

- `2026-03-04`：FLUX Playground 更新 `Styles`
  来源：https://playground.bfl.ai/changelog
  关键信号：把文本指令与参考图打包成可复用风格记忆，并支持 `Subtle / Strong` 两档注入。

判断：
BFL 最近最强的趋势不是“再发一个更会改的模型”，而是把编辑能力做成高吞吐、可复用、可记忆的生产系统。

## 学术趋势

### 推理增强编辑正在成型

- `REASONEDIT`：https://arxiv.org/abs/2511.22625
- `EditThinker`：https://arxiv.org/abs/2512.05965
- `Generative Visual Chain-of-Thought for Image Editing`：https://arxiv.org/abs/2603.01893
- `RIRF`：https://arxiv.org/abs/2604.09511

关键信号：
“先 critique，再 refine，再重试”的编辑闭环已经成为明确研究对象，reasoning 正从加分项变成主能力。

### verifier 正在从打分器变成过程约束器

- `UniREditBench`：https://arxiv.org/abs/2511.01295
- `InEdit-Bench`：https://arxiv.org/abs/2603.03657
- `Evaluating Image Editing with LLMs`：https://arxiv.org/abs/2603.19775
- `GEditBench v2`：https://arxiv.org/abs/2603.28547

关键信号：
评测重点正从“最终图像像不像”转向“编辑过程是否合理、局部真实性是否守住、中间逻辑是否连贯”。

### 智能体式恢复从 workflow 走向可学习策略

- `MIRA`：https://arxiv.org/abs/2511.21087
- `ImageEdit-R1`：https://arxiv.org/abs/2603.08059
- `PaAgent`：https://arxiv.org/abs/2603.17055
- `TIR-Agent`：https://arxiv.org/abs/2603.27742

关键信号：
恢复和编辑都越来越像一个策略学习问题，而不是固定工具链。

### 统一理解-生成-编辑依然是主航道，但更强调任务解耦

- `EMMA`：https://arxiv.org/abs/2512.04810
- `Unified Thinker`：https://arxiv.org/abs/2601.03127
- `UniReason 1.0`：https://arxiv.org/abs/2602.02437
- `Towards Generalized Multi-Image Editing for Unified Multimodal Models`：https://arxiv.org/abs/2601.05572

关键信号：
统一模型仍在继续推进，但最近论文越来越强调 shared representation 上层的任务解耦、计划层、保真层和验证层。

## 对项目的直接启发

### 现在最该追的不是更大的 SR backbone

最近半年最强的新趋势说明，真正决定上限的能力越来越偏向：

- `planner`
- `verifier`
- `session memory`
- `multi-turn editing`
- `tool routing`
- `reasoning trace`

### 长焦超分这类任务的主问题正在变化

以前更像是：

`怎样从低分辨率恢复更多细节`

现在更像是：

`怎样在不编造细节的前提下，只把真正有证据支撑的细节恢复出来，并在必要时让系统自己质疑自己`

### 真正该学 Gemini / Nano Banana 的地方

不是只学“图像更好看”，而是学这几层：

- 输入图像理解
- 编辑意图分解
- 多轮状态管理
- 搜索 / 工具增强
- verifier 驱动再编辑
- 版本与分支管理

## 现在就该做的动作

1. 把 parser 输出从一句 caption 升级成结构化退化报告。
2. 把单次 SR 指令升级成 `计划 + 保守候选 + 激进候选`。
3. 训练或蒸馏一个专门的 verifier，用来查伪纹理、物体幻觉、OCR 漂移和结构断裂。
4. 对困难样本启用多轮修补，而不是整图反复重画。
5. 采集轨迹数据，而不是只保存最终 `(LQ, HQ, prompt)`。

## 最后一句话

如果上一阶段的关键词是 `更会生成`，那最近半年的关键词已经变成：

`更会判断、分步、验证、回退、再修复`

这就是这半年最值得持续跟踪的方向.
