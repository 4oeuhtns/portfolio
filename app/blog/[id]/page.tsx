import Date from '@/components/blog/date'
import { DropdownItem } from '@/components/ui/navigation/dropdownitem'
import { DropdownMenu } from '@/components/ui/navigation/dropdownmenu'
import { Navbar } from '@/components/ui/navigation/navbar'
import { NavItem } from '@/components/ui/navigation/navitem'
import { getAllPostIds, getPostData } from '@/lib/posts'
import { ChevronDown, FolderGit2 } from 'lucide-react'

import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from '@mapbox/rehype-prism'

import 'styles/markdown.css'
import Link from 'next/link'

type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  content: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
  }
}

export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id)
  const markdown = postData.content
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.26.0/themes/prism-dark.min.css" />
      <Navbar>
        <NavItem icon={<FolderGit2 className="text-bg" />} href="/projects" />
        <NavItem icon={<ChevronDown className="text-bg" />} dropdown>
          <DropdownMenu>
          <DropdownItem href="/blog/primitives" leftIcon="🙈">Primitives</DropdownItem>
            <DropdownItem href="/blog/objects" leftIcon="💎">Objects</DropdownItem>
            <DropdownItem href="/blog/boolean" leftIcon="✅">Boolean Expressions</DropdownItem>
            <DropdownItem href="/blog/iteration" leftIcon="⚙️">Iteration</DropdownItem>
            <DropdownItem href="/blog/classes" leftIcon="🎓">Classes</DropdownItem>
            <DropdownItem href="/blog/arrays" leftIcon="📦">Arrays</DropdownItem>
            <DropdownItem href="/blog/arraylists" leftIcon="🎁">ArrayLists</DropdownItem>
            <DropdownItem href="/blog/sorting" leftIcon="📈">Searching and Sorting</DropdownItem>
            <DropdownItem href="/blog/arrays2d" leftIcon="🗃️">2D Arrays</DropdownItem>
            <DropdownItem href="/blog/inheritance" leftIcon="👨‍👩‍👦">Inheritance</DropdownItem>
            <DropdownItem href="/blog/recursion" leftIcon="♻️">Recursion</DropdownItem>
          </DropdownMenu>
        </NavItem>
      </Navbar>
      <div className='text-txt min-h-screen my-20 flex flex-col'>
        <div className='mx-20'>
          <h1 className='font-extrabold text-5x mb-1'>{postData.title}</h1>
          <div className='text-a font-medium mb-5'>
            <Date dateString={postData.date} />
          </div>
          <MDXRemote source={markdown} options={{
            mdxOptions: { rehypePlugins: [rehypeHighlight] },
          }} />
        </div>
      </div>
      <footer className='text-txt flex justify-between border-[#364418] border-t-2 p-8'>
        
        <Link className="flex items-center justify-center font-Garamond  text-xl italic hover:-translate-y-1 duration-500 mx-5" href="/">
          <div className="-translate-y-[2px] text-txt">← Back to home</div>
        </Link>
        @ Felix Zhao, 2023
      </footer>
    </div>
  )
}
