import { json, type LoaderFunctionArgs } from '@remix-run/server-runtime';
import { defaultHandler } from "ra-data-simple-prisma";
import { prisma } from "~/utils/prisma.server";


export const loader = async ({
    request,
}: LoaderFunctionArgs) => {
    const result = await defaultHandler(await request.json(), prisma);
    return json(result);
}

export const action = loader;

