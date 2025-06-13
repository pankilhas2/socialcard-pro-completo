get-session.ts
// pages/api/get-session.ts

import { createServerClient } from '@supabase/auth-helpers-nextjs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerClient({ req, res });

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session) {
    return res.status(401).json({ error: 'Não autenticado' });
  }

  return res.status(200).json({ user: session.user });
}
// pages/api/get-session.ts

import { createServerClient } from '@supabase/auth-helpers-nextjs';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const supabase = createServerClient({ req, res });

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error || !session) {
    return res.status(401).json({ error: 'Não autenticado' });
  }

  return res.status(200).json({ user: session.user });
}