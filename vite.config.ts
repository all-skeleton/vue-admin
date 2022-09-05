import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

import { viteMockServe } from "vite-plugin-mock"

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    return {
        plugins: [
            vue(),
            viteMockServe({
                mockPath: "mock",
                supportTs: true,     //如果使用 js发开，则需要配置 supportTs 为 false
                localEnabled: command === 'serve', // 开发打包开关
                // localEnabled: true, // 开发打包开关
                // prodEnabled: false, // 生产打包开关
                logger: true,
                watchFiles: true, // 监视文件更改
                injectCode: `
                  import { setupMock } from '../mock';
                  setupMock();
                  `,
            }),
            AutoImport({
                resolvers: [ElementPlusResolver()],
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        }
    }
})
