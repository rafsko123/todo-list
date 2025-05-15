import styles from "./page.module.scss";

import BGLayer from '@/assets/svg/bg.svg';
import Header from "@/components/header";
import List from "@/components/list";
import { getTodoList } from "@/lib/api";

export const dynamic = 'force-static'

export default async function Home() {
  const data = await getTodoList();

  return (
    <div className={styles.page}>
      <div className={styles.bg}>
        <BGLayer />
      </div>
      <div className={styles.wrapper}>
        <Header>
          Lista zadań
        </Header>
        <List initialData={data} />
      </div>
    </div>
  );
}
