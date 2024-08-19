import React from 'react';
import Author from '../blogs/Author';
import { useTranslation } from 'next-i18next';

function TomStory() {
  const { t } = useTranslation('common');

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-4 mt-8">
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/img/home/docs.svg"
            alt="collaboration image"
            width={500}
            height={500}
          />
        </div>

        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {t('tom-story-title')}
          </h2>
          <p className="mb-4 ">
            Tom’s a manager who’s in charge of making sure new features hit
            production on time. But every time he organises a bug bash, he
            watches{' '}
            {t('tom-story-description-1')}
            <span className="font-bold ">
              his team bounce between tools, wasting time uploading images and
              videos to cloud storage and pasting links into an Excel sheet.
              {t('tom-story-description-2')}
            </span>
          </p>
          <p className="mb-4 ">
            And that’s not even the worst part—after all that, Tom still{' '}
            {t('tom-story-description-3')}
            <span className="font-bold">
              {' '}
              has to go through reports, sort out duplicates, prioritise issues,
              create tickets, and then track them as they move through the
              workflow.
              {t('tom-story-description-4')}
            </span>
          </p>
          <p className="">
            At first, we just wanted to help Tom. Then we thought, Why not help
            anyone going through the same headache?
            {t('tom-story-description-5')}
          </p>

          <Author
            name="Tom Allen"
            socialMediaUsername="Team Manager"
            avatar="/img/tom-2.webp"
            socialMediaLink="/"
          />
        </div>
      </div>
    </section>
  );
}

export default TomStory;
