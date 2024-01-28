import {z} from "zod"

export const BloPostValidationSchema = z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    photo_url: z.string().url(),
    category: z.string(),
    content_text: z.string(),
    user_id: z.number(),
})

export type BloPostType = z.infer<typeof BloPostValidationSchema>


export const UserValidationSchema = z.object({
    id: z.number(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    phone: z.string(),
    state: z.string(),
    city: z.string(),
    country: z.string(),
    profile_picture: z.string().url(),
    job: z.string(),
})

export type UserType = z.infer<typeof UserValidationSchema>



