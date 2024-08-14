import sanityClient from '@sanity/client';
import imageBuilder from '@sanity/image-url';

export  const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'etamin',
    apiVersion: '2024-06-13',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
});
const builder = imageBuilder(client);
export const urlFor = (source)=>builder.image(source)
export const fileUrlFor = (source) => {
    const [, id, extension] = source.split('-');
    return `https://cdn.sanity.io/files/${process.env.REACT_APP_SANITY_PROJECT_ID}/${'bigi'}/${id}.${extension}`;
};