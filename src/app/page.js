"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { Typography, Divider, ConfigProvider } from 'antd'

const { Title, Text } = Typography

export default function Home() {
  return (
    <main className={styles.main}>
      <ConfigProvider
            theme={{
                components: {
                    Typography: {
                        titleMarginBottom: 0,
                        titleMarginTop: 0,
                    },
                },
            }}
        >
          <Title>Media Library</Title>
        </ConfigProvider>
    </main>
  )
}
