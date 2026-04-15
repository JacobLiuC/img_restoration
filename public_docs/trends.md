# 2025Q4-2026Q2 公开趋势速览

更新日期：`2026-04-15`

这份报告只保留 `2025-10-01` 到 `2026-04-15` 的公开信号，聚焦模型发布、模型卡、论文、评测与仓库动向。

## 总览

最近半年的图像系统演进，可以浓缩成四个关键词：

1. `多轮会话`
   图像编辑逐步摆脱“一次请求、一张结果”的模式，开始强调状态继承、连续修改与一致性维护。

2. `推理增强`
   规划、反思、搜索与工具调用正在进入图像编辑主流程，系统越来越像能够解释自身步骤的工作流。

3. `真实性约束`
   公开产品和论文都在强化局部真实性、文字稳定性、身份保持与结构一致性。

4. `智能体化恢复`
   图像恢复不再只是单模型推理，而是感知、路由、验证、回退和局部修复组成的闭环系统。

## 产业侧公开信号

### Google / Gemini

- `2025-11-20` [Nano Banana Pro（Gemini 3 Pro Image）](https://blog.google/technology/ai/nano-banana-pro/)
  公开强调更强的推理、世界知识、4K 输出和一致性控制，说明图像模型正在从单一生成能力走向更完整的系统能力。

- `2026-02-26` [Gemini 3.1 Flash Image 模型卡](https://deepmind.google/models/model-cards/gemini-3-1-flash-image/)
  模型卡直接覆盖 `General Editing`、`Character Editing`、`Object-Environment Editing`、`Multi-Turn` 与 `Multi-Image`，并把 `Thinking + Text Search + Image Search` 纳入公开能力边界。

### OpenAI

- `2025-12-16` [ChatGPT Images / GPT-Image-1.5](https://openai.com/index/new-chatgpt-images-is-here/)
  公开重点放在精确编辑、后续编辑一致性与连续工作流，图像能力越来越接近会话式创作环境。

### Qwen / StepFun

- `2025-12-17` [StepFun 模型页](https://huggingface.co/stepfun-ai/models)
  最近公开页面持续强化一致性、LoRA 集成与推理导向编辑。

- `2025-12-17` [Qwen-Image-Edit-2511](https://huggingface.co/Qwen/Qwen-Image-Edit-2511)
  页面描述把 `image drift`、角色一致性、几何推理与外观保持放到核心位置。

- `2025-12-31` [Qwen-Image-2512](https://huggingface.co/Qwen/Qwen-Image-2512)
  公开更新继续强调更真实的人像、自然细节与文本渲染。

### BFL / FLUX

- `2026-01-18` [BFL Release Notes](https://docs.bfl.ai/release-notes)
  `FLUX.2 [pro]` 一类更新把编辑吞吐、生产效率与工程化稳定性推到更高优先级。

## 论文与评测动向

### 推理增强图像编辑

- `2025-11-27` [ReasonEdit](https://arxiv.org/abs/2511.22625)
- `2025-12-05` [EditThinker](https://arxiv.org/abs/2512.05965)
- `2026-01-11` [ThinkEdit](https://arxiv.org/abs/2601.09128)

这一组工作共同说明：`reasoning / planning / reflection` 已经成为图像编辑的正式研究主题，而不是单独附加的提示技巧。

### 评测从最终效果走向过程质量

- `2026-03-04` [InEdit-Bench](https://arxiv.org/abs/2603.03657)
- `2026-03-20` [Evaluating Image Editing with LLMs](https://arxiv.org/abs/2603.19775)
- `2026-03-30` [GEditBench v2](https://arxiv.org/abs/2603.28547)

评测重点正在从“最终图像像不像”延伸到“编辑步骤是否合理、局部真实性是否守住、指令执行是否稳定”。

### 智能体式恢复

- `2025-11-26` [MIRA](https://arxiv.org/abs/2511.21087)
- `2026-03-09` [ImageEdit-R1](https://arxiv.org/abs/2603.08059)
- `2026-03-17` [PaAgent](https://arxiv.org/abs/2603.17055)
- `2026-03-29` [TIR-Agent](https://arxiv.org/abs/2603.27742)

恢复和编辑都越来越像策略学习问题，公开论文正在把工具调度、规划与多轮修复写进系统定义。

### 统一模型与任务解耦并行推进

- `2025-12-04` [EMMA](https://arxiv.org/abs/2512.04810)
- `2026-01-06` [Unified Thinker](https://arxiv.org/abs/2601.03127)
- `2026-02-02` [UniReason 1.0](https://arxiv.org/abs/2602.02437)
- `2026-01-09` [Towards Generalized Multi-Image Editing for Unified Multimodal Models](https://arxiv.org/abs/2601.05572)

公开研究一边推动理解、生成、编辑统一，一边也在强调计划层、保真层和验证层的显式解耦。

## 这轮趋势带来的启示

### 1. 单一生成能力不再足够

未来的高水平图像系统，越来越依赖 `理解 -> 规划 -> 执行 -> 验证 -> 修复` 的完整链路，而不是单次生成质量。

### 2. 真实性成为产品能力，不只是评测指标

局部结构、文字、角色与材质稳定性，已经从“锦上添花”变成可信图像系统的基础条件。

### 3. 统一模型之外，仍需要专门的保真控制

公开信号越来越说明：即使采用统一多模态模型，系统内部依然需要面向保真和真实性的单独控制通路。

## 接下来值得持续观察

- 产品是否继续强化 `multi-turn session` 与跨回合一致性
- 公开模型卡是否继续把 `thinking / search / tool use` 写进图像能力说明
- 学术评测是否进一步把 verifier 和过程质量作为标准项
- 工程开源是否出现更成熟的区域修复、回退与重试机制
