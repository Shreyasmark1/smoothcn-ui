import { Suspense, lazy } from "react";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {

    const navs = [
        {title: "/button"},
        {title: "/accordian"}
    ]
    
    return navs.map((nav: { title: string; }) => {
        slug: nav.title
    });
}


const Page = ({ params }: { params: { slug: string } }) => {

    const { slug } = params

    try {

        const Preview = lazy(() => import(`@/components/demo/${slug.toLowerCase()}-demo`))

        return (
            <div className="flex justify-center items-center h-full">
                <div className="container w-[600px]">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Preview />
                    </Suspense>
                </div>
            </div>
        );

    } catch (error) {

        return (
            <div className="flex justify-center items-center h-full">
                <div className="container w-[600px]">
                    <Suspense fallback={<div>Loading...</div>}>
                        <div>Failed to load</div>
                    </Suspense>
                </div>
            </div>
        );
    }
}

export default Page;