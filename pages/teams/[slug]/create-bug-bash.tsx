import React, { use, useState } from 'react';
import { GetServerSidePropsContext } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Button } from 'react-daisyui';
import useTeam from 'hooks/useTeam';
import { Error, Loading } from '@/components/shared';
import { useFormik } from 'formik';
import type { TeamFeature } from 'types';
import env from '@/lib/env';

import { Card, InputWithLabel, RichTextInput } from '@/components/shared';
import { ApiResponse } from '@boxyhq/react-ui/dist/dsync/types';
import toast from 'react-hot-toast';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import BugBashSessionData from '../../../interfaces/BugBashSessionData';

const CreateBugBash = ({ teamFeatures }: { teamFeatures: TeamFeature }) => {
  const { t } = useTranslation('common');
  const { isLoading, isError, team } = useTeam();
  const { data: session } = useSession();
  const router = useRouter();
  const [richText, setRichText] = React.useState<string>('');

  const createBugBashSession = async (data: BugBashSessionData) => {
    const response = await fetch(`/api/bugBash`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    if (!response.ok) {
      const json = (await response.json()) as ApiResponse;
      if ('error' in json) {
        toast.error(json.error.message);
      }
    }

    if (response.ok) {
      toast.success('Bug Bash created successfully');
      router.push(`/teams/${team?.slug}/products`);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: async (values) => {
      createBugBashSession({
        name: values.name,
        description: richText,
        userId: session?.user.id || '',
        teamId: team?.id || '',
      });
    },
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error message={isError.message} />;
  }

  if (!team) {
    return <Error message={t('team-not-found')} />;
  }

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Card>
          <Card.Body>
            <Card.Header>
              <Card.Title> New Bug Bash Session</Card.Title>
              <Card.Description>Provide context for your team</Card.Description>
            </Card.Header>
            <div className="flex flex-col gap-4">
              <InputWithLabel
                name="name"
                label="Bug Bash Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.errors.name}
              />

              <RichTextInput
                label="Description"
                value={richText}
                onChange={setRichText}
              />
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="flex justify-end">
              <Button
                type="submit"
                color="primary"
                loading={formik.isSubmitting}
                disabled={!formik.isValid || !formik.dirty}
                size="md"
              >
                Create Bug Bash
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </form>
    </>
  );
};

export async function getServerSideProps({
  locale,
}: GetServerSidePropsContext) {
  return {
    props: {
      ...(locale ? await serverSideTranslations(locale, ['common']) : {}),
      teamFeatures: env.teamFeatures,
    },
  };
}

export default CreateBugBash;
