



/*/
     course_id: 'e300cd07-b706-4d2e-bf57-f3858d6e38c1',
    course_title: 'Curos React desde cero',
    slug: 'React-desde-cero',
    created_at: '2025-09-14T22:05:43.690512+00:00',
    students: 0,
    price: 19.99,
    image_url: null,
    duration: 2,
    description: 'aqui aprenderas react desde cero las bases, hooks, efectos, estados, memorias, components, el estado de un componene',
    introduction_video_url: null,
    category_name: 'front-end',
    level_name: 'easy',
    chapters: 1,
    rating: 3
/*/

export interface Course 
    {
         course_id: string
        course_title: string
        slug: string
        created_at: string
        students: number
        price: number
        image_url: string | null
        duration: number
        description: string
        introduction_video_url: string | null
        chapters: number
        rating: number
        level_name: string
        category_name: string
    }

export type FullCourse =  {
    category_id: number;
    created_at: string;
    description: string;
    duration: number;
    id: string;
    image_url: string | null;
    introduction_video_url: string | null;
    level_id: number;
    name: string;
    price: number;
    slug: string;
    students: number;
    chapters: {
        course_id: string;
        created_at: string;
        description: string;
        id: number;
        is_published: boolean;
        title: string;
        video_url: string | null;
    }[];
    levels: {
        name: string;
    };
    categories: {
        name: string;
    };
} 

export type CourseCardProps = {
    course: Course
    index: number
}
