<script setup lang="ts">
import { ref, onMounted } from 'vue';
import moment from 'moment';

import { PlusCircleIcon, TrashIcon } from '@heroicons/vue/24/solid';

import { EMethod, fetch } from '../libraries/fetch';

export interface Episode {
  title: string;
  podcastID: string;
  podcastName: string;
  logoURL: string;
  link: string;
  playCount: number;
  commentCount: number;
  subscription: number;
  duration: number;
  postTime: string;
  primaryGenreName: string;
  totalEpisodesCount: number;
  openRate: number;
  lastReleaseDateDayCount: number;
}

let episodes = ref<Episode[]>([]);

onMounted(async () => {
  const { status, data } = await fetch('https://www.xiaoyuzhoufm.com/podcast/5e2839ca418a84a0462431b7', EMethod.GET);
  if (status) {
    console.warn(data);
  }
})
</script>

<template>
  <section class="podcast-section border border-slate-50 rounded shadow-xl divide-y divide-slate-50">
    <div class="podcast-header px-4 py-3">
      <span class="text-sm text-slate-500">播客</span>
      <div class="podcast-header-right-side">
        <a class="podcast-datasource-logo p-1" href="https://xyzrank.com/#/">
          <img src="https://xyzrank.justinbot.com/public/favicon.png" alt="" srcset="">
        </a>
        <a class="podcast-datasource-logo p-1" href="https://www.listennotes.com/zh-hans/best-podcasts/?region=cn">
          <img src="https://www.listennotes.com/static/v4/img/logo/favicon-32x32.png" alt="" srcset="">
        </a>
        <div class="podcast-subscription-configuration-button ml-1 text-slate-500" type="button"
          data-drawer-placement="right" data-drawer-target="podcast-subscription-configuration"
          data-drawer-show="podcast-subscription-configuration" aria-controls="podcast-subscription-configuration">
          <PlusCircleIcon />
        </div>
      </div>
    </div>
    <div v-if="!episodes.length" class="episode-bitmap-block">
      <div class="episode-bitmap"></div>
    </div>
    <div v-else class="episode-list-block p-2">
      <a class="episode-item mt-1" v-for="item in episodes" :key="item.podcastID" :href="item.link">
        <div class="episode-item-content">
          <img class="episode-item-cover rounded" :src="item.logoURL" alt="">
          <div class="episode-item-block ml-2">
            <h6 class="episode-item-title truncate text-gray-500 text-sm">
              {{ item.title }}
            </h6>
            <div class="episode-item-info text-slate-400 text-sm">
              <span class="truncate" style="width: 72px;">{{ item.podcastName }}</span>
              <div class="episode-item-info-right-side">
                <span style="width: 36px;">{{ item.duration }}M</span>
                <div class="episode-item-info-time rounded-full px-3 py-0.5 border border-slate-100 ml-2">
                  <div class="episode-item-info-time-point rounded-full bg-slate-500"></div>
                  <span class="ml-2 text-xs">{{ moment(item.postTime).format('YYYY.MM.DD') }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>

    <div id="podcast-subscription-configuration"
      class="fixed top-0 right-0 z-40 h-screen overflow-y-auto transition-transform translate-x-full bg-white w-96 dark:bg-gray-800 divide-y divide-slate-50"
      tabindex="-1" aria-labelledby="drawer-right-label">
      <div class="drawer-header px-3 py-3">
        <span class="text-sm text-slate-500">
          播客订阅配置
        </span>
        <button type="button" data-drawer-hide="podcast-subscription-configuration"
          aria-controls="podcast-subscription-configuration"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>
      </div>
      <div class="drawer-content divide-y divide-slate-50">
        <div class="podcast-list">
          <div class="podcast-item">
            <div class="podcast-item-content w-96 px-3 py-3">
              <img class="podcast-item-cover rounded"
                src="https://bts-image.xyzcdn.net/aHR0cHM6Ly9pbWFnZS54eXpjZG4ubmV0L0ZxcVFrRzJBcGk2M2lZSHozOERXbG5GZFItMXkuanBn.jpg@small"
                alt="">
              <div class="podcast-item-block ml-2">
                <h6 class="podcast-item-title truncate text-sm">
                  乱翻书
                </h6>
                <p class="podcast-item-description truncate text-gray-500 text-sm">
                  关注商业、科技和互联网，关心How和Why，以及少有人注意到的What。节目形式是商业圆桌，内容方向是科技考古、行业观察和前沿思考，希望能够为你提供信息增量。
                  「乱翻书」主理人是潘乱，代表作品有《腾讯没有梦想》、字节跳动/快手早期关键节点的系列特写。</p>
              </div>
            </div>
            <div class="podcast-item-button-group px-3 py-3">
              <div class="flex-1 text-center text-sm cursor-pointer">
                <span class="cursor-pointer text-gray-500">节目列表</span>
              </div>
              <div class="w-px bg-slate-500 mx-2" style="height: 0.75em;"></div>
              <div class="w-4 h-4 text-sm">
                <TrashIcon />
              </div>
            </div>
          </div>
        </div>
        <div class="podcast-list">
          <div class="podcast-item-content w-96 px-3 py-3">
            <img class="podcast-item-cover rounded"
              src="https://bts-image.xyzcdn.net/aHR0cHM6Ly9pbWFnZS54eXpjZG4ubmV0L0ZxcVFrRzJBcGk2M2lZSHozOERXbG5GZFItMXkuanBn.jpg@small"
              alt="">
            <div class="podcast-item-block ml-2">
              <h6 class="podcast-item-title truncate text-gray-500 text-sm">
                乱翻书
              </h6>
              <p class="podcast-item-description truncate text-gray-500 text-sm">
                关注商业、科技和互联网，关心How和Why，以及少有人注意到的What。节目形式是商业圆桌，内容方向是科技考古、行业观察和前沿思考，希望能够为你提供信息增量。
                「乱翻书」主理人是潘乱，代表作品有《腾讯没有梦想》、字节跳动/快手早期关键节点的系列特写。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.podcast-section {
  display: flex;
  flex-direction: column;

  width: 360px;
  /* height: 540px; */
}

.podcast-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.podcast-header-right-side {
  display: flex;
  align-items: center;
}

.podcast-datasource-logo {
  width: 32px;
  height: 32px;
}

.podcast-subscription-configuration-button {
  width: 32px;
  height: 32px;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.episode-bitmap-block {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 540px;
  max-height: 540px;
}

.episode-bitmap {
  width: 196px;
  height: 196px;

  border-radius: 50%;
  background: linear-gradient(315deg, #e6e6e6, #ffffff);
  box-shadow: -12px -12px 100px #c7c7c7,
    12px 12px 100px #ffffff;
}

.episode-list-block {
  display: flex;
  flex-direction: column;

  height: 532px;
  max-height: 532px;
  overflow-y: auto;
}

.episode-item-content {
  display: flex;
  flex-direction: row;
}

.episode-item-cover {
  width: 48px;
  height: 48px;
}

.episode-item-block {
  display: flex;
  flex-direction: column;

  width: 286px;
}

.episode-item-info {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: auto;
}

.episode-item-info-right-side {
  display: flex;
  align-items: center;
}

.episode-item-info-time {
  display: flex;
  align-items: center;
}

.episode-item-info-time-point {
  width: 4px;
  height: 4px;
}

.podcast-item-content {
  display: flex;
}

.podcast-item-cover {
  width: 48px;
  height: 48px;
}

.podcast-item-block {
  display: flex;
  flex-direction: column;

  max-width: 304px;
}

.podcast-item-description {
  margin-top: auto;
}

.podcast-item-button-group {
  display: flex;
  align-items: center;
}
</style>