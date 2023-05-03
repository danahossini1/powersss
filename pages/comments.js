import Comment from '@/models/Comments'
import connectDb from '@/utils/connectDB'
import React from 'react'

export default function Comments(props) {

  const { comments } = props

  console.log(comments);

  return (
    <div className=''>
      <h1 className='text-center mt-6 text-2xl dark:text-stone-100 font-bold'>نظرات شما</h1>
      <section class="bg-slate-200 dark:bg-gray-700 py-4 px-4 lg:py-6">
        {comments.map(comment =>
          <div class="max-w-2xl mx-auto my-4 bg-white dark:bg-slate-800 p-3 rounded-2xl px-4">
            <article class="p-3 text-base rounded-lg">
              <div>
                <h1 className='text-gray-500 dark:text-gray-400 text-xs mi:text-sm mb-2'>{comment.userName} :</h1>
              </div>
              <p class=" text-gray-600 dark:text-gray-300 text-sm mi:text-base ">{comment.comment}</p>
              <div class="flex items-center mt-4 space-x-4">
              </div>
            </article>
            {comment.answer !== '0' &&
              <article class="p-4 mb-6  mx-4  text-base bg-slate-200 rounded-lg dark:bg-gray-900">
                <div>
                  <h1 className='text-gray-500 dark:text-gray-400 text-xs mi:text-sm mb-2'>پاسخ :</h1>
                </div>
                <p class=" text-gray-600 dark:text-gray-300 text-sm mi:text-base ">{comment.answer}</p>
                <div class="flex items-center mt-4 space-x-4">
                </div>
              </article>
            }

          </div>
        )}
      </section>
    </div>
  )
}

export async function getServerSideProps() {

  try {
    await connectDb()

    const allComments = await Comment.find()
    const acceptedComments = allComments.reverse().filter(comment => comment.ok)

    return {
      props: { comments: JSON.parse(JSON.stringify(acceptedComments)) }
    }
  } catch (err) {
    return {
      notFound: true
    }
  }

}