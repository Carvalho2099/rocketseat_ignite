import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/Carvalho2099.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Felipe Carvalho</strong>
                        <span>Front Developer</span>
                    </div>
                </div>
                <time title='15 de Junho as 11h' dateTime='2023-06-15'>Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galera!!</p>
                <p>acabei de subir umas paradas ai</p>
                <p><a href=""> Felipe.carvalho.link</a></p>
                <p><a href=""> aqui vai as # </a></p>
            </div>
        </article>
    )
}