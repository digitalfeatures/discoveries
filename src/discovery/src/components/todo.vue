<script setup lang="ts">
</script>

<template>
    <section class="todo-section border border-slate-50 rounded shadow-xl divide-y divide-slate-50">
        <div class="px-4 py-2">
            <span class="text-sm text-slate-500">Todo</span>
        </div>
        <div class="todo-list-block px-4 py-0 divide-y divide-slate-50">
            <div class="todo-item py-4 leading-4">
                <p class="todo-item-content text-sm truncate text-slate-500">
                    21点玩家具体是如何计算概率的，对我们来说并不重要。重要的是，他们知道自己玩的是一种概率游戏，其中存在着很大的不确定性。对任何一手牌，他们一方面觉得自己算对的概率很大，另一方面知道算错的概率也不小。考虑到他们对21点游戏的专业性，你会觉得这有点儿奇怪，但他们的策略完全依托于这样一种自我认知——自己不知道也不可能准确知道接下来会发生什么——所以他们会根据具体情况对策略进行相应的调整。算牌之所以有效，是因为它能让概率上的优势从庄家略微向个人玩家倾斜。但即使玩家觉得情况对自己很有利，于是下了重注，一旦猜错，损失也可能非常惨重，导致他们无法继续游戏。
                </p>
                <div class="todo-item-action mt-2">
                    <div class="todo-item-label-list">
                        <div class="todo-item-label rounded-full px-3 py-0.5 border border-slate-100 ml-2">
                            <div class="todo-item-label-point rounded-full bg-slate-500"></div>
                            <span class="ml-2 text-xs">重要且紧急</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="todo-item py-4 leading-4">
                <p class="todo-item-content text-sm truncate text-slate-500">
                    21点玩家具体是如何计算概率的，对我们来说并不重要。重要的是，他们知道自己玩的是一种概率游戏，其中存在着很大的不确定性。
                </p>
                <div class="todo-item-action mt-2">
                    <div class="todo-item-label-list">
                        <div class="todo-item-label rounded-full px-3 py-0.5 border border-slate-100 ml-2">
                            <div class="todo-item-label-point rounded-full bg-slate-500"></div>
                            <span class="ml-2 text-xs">重要且紧急</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="todo-item py-4 leading-4">
                <p class="todo-item-content text-sm truncate text-slate-500">
                    21点玩家具体是如何计算概率的，对我们来说并不重要。重要的是，他们知道自己玩的是一种概率游戏，其中存在着很大的不确定性。对任何一手牌，他们一方面觉得自己算对的概率很大，另一方面知道算错的概率也不小。考虑到他们对21点游戏的专业性，你会觉得这有点儿奇怪，但他们的策略完全依托于这样一种自我认知——自己不知道也不可能准确知道接下来会发生什么——所以他们会根据具体情况对策略进行相应的调整。算牌之所以有效，是因为它能让概率上的优势从庄家略微向个人玩家倾斜。但即使玩家觉得情况对自己很有利，于是下了重注，一旦猜错，损失也可能非常惨重，导致他们无法继续游戏。
                </p>
                <div class="todo-item-action mt-2">
                    <div class="todo-item-label-list">
                        <div class="todo-item-label rounded-full px-3 py-0.5 border border-slate-100 ml-2">
                            <div class="todo-item-label-point rounded-full bg-slate-500"></div>
                            <span class="ml-2 text-xs">重要且紧急</span>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
        <div class="todo-create-button rounded-full border border-slate-50">

        </div>
    </section>
</template>

<style scoped>
.todo-section {
    position: relative;

    width: 620px;
    min-height: 32px;
}

/* .todo-item-content {} */

.todo-item-action {
    display: flex;
    justify-content: flex-end;
}

.todo-item-label-list {
    display: flex;
    flex-direction: row;
}

.todo-item-label {
    display: flex;
    align-items: center;
}

.todo-item-label-point {
    width: 4px;
    height: 4px;
}

.todo-create-button {
    position: absolute;
    right: 24px;
    bottom: 2px;
    transform: translateY(50%);

    width: 48px;
    height: 48px;

    background-color: rgba(255, 255, 255, 1);
}
</style>
