import Image from "next/image";
import avatar from "/public/avatar.png";
import styles from "./style.module.css";
import postImage from "/public/post_img_example.jpeg";
import Link from "next/link";

export default function PostCard() {
  return (
    <>
      <div className={styles.posts__columns}>
        <Link href="/posts" className={styles.link}>
          <article className={styles.article}>
            <h2 className={styles.article__title}>
              Post 1 Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p className={styles.article__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              tempor nunc maecenas cras ipsum, lorem massa lacus
            </p>
            <div className={styles.author}>
              <Image
                src={avatar}
                alt="author avatar"
                className={`${styles.author__avatar} ${styles.link}`}
              />
              <div>
                <h3 className={styles.author__title}>
                  Eduardo Morikuni Fortes
                </h3>
                <time dateTime="2023-12-17" className={styles.article__date}>
                  17 de dezembro de 2023
                </time>
              </div>
            </div>
            <hr />
          </article>
        </Link>
        <Link href="./posts" className={styles.link}>
          <article className={styles.article}>
            <div>
              <Image
                src={postImage}
                alt="Imagem de capa do post"
                className={styles.article__img}
              />
            </div>
            <h2 className={styles.article__title}>
              Post 2 Lorem ipsum dolor sit amet, consectetur
            </h2>
            <p className={styles.article__text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              tempor nunc maecenas cras ipsum, lorem massa lacus
            </p>
            <div className={styles.author}>
              <Image
                src={avatar}
                alt="author avatar"
                className={styles.author__avatar}
              />
              <div>
                <h3 className={styles.author__title}>
                  Eduardo Morikuni Fortes
                </h3>
                <time dateTime="2023-12-17" className={styles.article__date}>
                  18 de dezembro de 2023
                </time>
              </div>
            </div>
            <hr />
          </article>
        </Link>
        <article className={styles.article}>
          <h2 className={styles.article__title}>
            Post 3 Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className={styles.article__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor
            nunc maecenas cras ipsum, lorem massa lacus
          </p>
          <div className={styles.author}>
            <Image
              src={avatar}
              alt="author avatar"
              className={styles.author__avatar}
            />
            <div>
              <h3 className={styles.author__title}>Eduardo Morikuni Fortes</h3>
              <time dateTime="2023-12-17" className={styles.article__date}>
                18 de dezembro de 2023
              </time>
            </div>
          </div>
          <hr />
        </article>
      </div>
      <div className={styles.posts__columns}>
        <article className={styles.article}>
          <div>
            <Image
              src={postImage}
              alt="Imagem de capa do post"
              className={styles.article__img}
            />
          </div>
          <h2 className={styles.article__title}>
            Post 4 Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className={styles.article__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor
            nunc maecenas cras ipsum, lorem massa lacus
          </p>
          <div className={styles.author}>
            <Image
              src={avatar}
              alt="author avatar"
              className={styles.author__avatar}
            />
            <div>
              <h3 className={styles.author__title}>Eduardo Morikuni Fortes</h3>
              <time dateTime="2023-12-17" className={styles.article__date}>
                18 de dezembro de 2023
              </time>
            </div>
          </div>
          <hr />
        </article>
        <article className={styles.article}>
          <div>
            <Image
              src={postImage}
              alt="Imagem de capa do post"
              className={styles.article__img}
            />
          </div>
          <h2 className={styles.article__title}>
            Post 5 Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className={styles.article__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor
            nunc maecenas cras ipsum, lorem massa lacus
          </p>
          <div className={styles.author}>
            <Image
              src={avatar}
              alt="author avatar"
              className={styles.author__avatar}
            />
            <div>
              <h3 className={styles.author__title}>Eduardo Morikuni Fortes</h3>
              <time dateTime="2023-12-17" className={styles.article__date}>
                18 de dezembro de 2023
              </time>
            </div>
          </div>
          <hr />
        </article>
      </div>
      <div className={`${styles.posts__columns} ${styles.post__column_hide}`}>
        <article className={styles.article}>
          <div>
            <Image
              src={postImage}
              alt="Imagem de capa do post"
              className={styles.article__img}
            />
          </div>
          <h2 className={styles.article__title}>
            Post 6 Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className={styles.article__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor
            nunc maecenas cras ipsum, lorem massa lacus
          </p>
          <div className={styles.author}>
            <Image
              src={avatar}
              alt="author avatar"
              className={styles.author__avatar}
            />
            <div>
              <h3 className={styles.author__title}>Eduardo Morikuni Fortes</h3>
              <time dateTime="2023-12-17" className={styles.article__date}>
                18 de dezembro de 2023
              </time>
            </div>
          </div>
          <hr />
        </article>
        <article className={styles.article}>
          <h2 className={styles.article__title}>
            Post 7 Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className={styles.article__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor
            nunc maecenas cras ipsum, lorem massa lacus
          </p>
          <div className={styles.author}>
            <Image
              src={avatar}
              alt="author avatar"
              className={styles.author__avatar}
            />
            <div>
              <h3 className={styles.author__title}>Eduardo Morikuni Fortes</h3>
              <time dateTime="2023-12-17" className={styles.article__date}>
                18 de dezembro de 2023
              </time>
            </div>
          </div>
          <hr />
        </article>
        <article className={styles.article}>
          <div>
            <Image
              src={postImage}
              alt="Imagem de capa do post"
              className={styles.article__img}
            />
          </div>
          <h2 className={styles.article__title}>
            Post 8 Lorem ipsum dolor sit amet, consectetur
          </h2>
          <p className={styles.article__text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet tempor
            nunc maecenas cras ipsum, lorem massa lacus
          </p>
          <div className={styles.author}>
            <Image
              src={avatar}
              alt="author avatar"
              className={styles.author__avatar}
            />
            <div>
              <h3 className={styles.author__title}>Eduardo Morikuni Fortes</h3>
              <time dateTime="2023-12-17" className={styles.article__date}>
                18 de dezembro de 2023
              </time>
            </div>
          </div>
          <hr />
        </article>
      </div>
    </>
  );
}
