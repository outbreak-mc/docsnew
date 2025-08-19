import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "OUTBREAK",
  description: "",
  // base: "/docsnew/",
  themeConfig: {
    logo: "/logo_128.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Карта мира", link: "https://map.outbreak.space"
      },
      { 
        text: 'Гайды', items: [
          // {text: "♨️ Установка Java", link: "/modpack/java-installation"},
          // {text: "📦 Установка сборок", link: "/modpack/installation"},
          {text: "🎨 Формат в чате и никах", link: "/formatting"},
        ] 
      },
      // { 
      //   text: 'Фичи', items: [
      //     {text: "👒 Шапки", link: "/hats"},
      //     {text: "☁️ Вэйпы", link: "/vapes"},
      //     {text: "🖼️ Невидимые рамки", link: "/invisiframes"},
      //     {text: "🎥 Камеры", link: "/invisiframes"}
      //   ] 
      // },
      { 
        text: 'Проект', items: [
          {items: [
            {text: "Правила", link: "/rules"},
            {text: "Донат и бесплатная поддержка", link: "/other/supporting.html#%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0-%D0%B8-%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B8%D1%81%D1%82%D0%B2%D0%BE-%D0%B2-%D0%BA%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%83"},
            {text: "Хочу в команду!", link: "/other/supporting#%D0%B2%D0%BE%D0%BB%D0%BE%D0%BD%D1%82%D0%B5%D1%80%D1%81%D1%82%D0%B2%D0%BE"},
          ]},
          {items: [
            {text: "Discord", link: "https://discord.gg/fhgkRff"},
            {text: "Telegram", link: "https://t.me/outbreak_mc"},
            {text: "GitHub", link: "https://github.com/outbreak-mc"},
          ]},
          // {items: [
          //   {text: "Пожертвовать на Boosty", link: "https://boosty.to/outbreak-mc/donate"},
          // ]},
          // {items: [
          //   {text: "Проголосуйте за нас здесь", link: "https://minecraftrating.ru/server/282108/"},
          //   {text: "и здесь", link: "https://hotmc.ru/minecraft-server-200178/"}
          // ]}
        ] 
      },
    ],

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/outbreak_mc' },
      { icon: 'discord', link: 'https://discord.gg/fhgkRff' },
      { icon: 'github', link: 'https://github.com/outbreak-mc' },
    ],

    // aside: 'left',

    outline: {
      label: "Содержание",

    }
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
})
