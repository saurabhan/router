import { routeConfig } from '../../../routes.generated/dashboard/invoices/index'
import * as React from 'react'
import { Invoice, postInvoice } from '../../../mockTodos'
import { InvoiceFields } from '../../../components/InvoiceFields'
import { useAction, useMatch } from '@tanstack/react-router'

routeConfig.generate({
  component: InvoicesHome,
  action: postInvoice,
})

function InvoicesHome() {
  const action = useAction({ from: routeConfig.id })

  return (
    <>
      <div className="p-2">
        <form
          onSubmit={(event) => {
            event.preventDefault()
            event.stopPropagation()
            const formData = new FormData(event.target as HTMLFormElement)
            action.submit(
              {
                title: formData.get('title') as string,
                body: formData.get('body') as string,
              },
              {
                multi: true,
              },
            )
          }}
          className="space-y-2"
        >
          <div>Create a new Invoice:</div>
          <InvoiceFields invoice={{} as Invoice} />
          <div>
            <button className="bg-blue-500 rounded p-2 uppercase text-white font-black disabled:opacity-50">
              Create
            </button>
          </div>
          {action.current?.status === 'success' ? (
            <div className="inline-block px-2 py-1 rounded bg-green-500 text-white animate-bounce [animation-iteration-count:2.5] [animation-duration:.3s]">
              Created!
            </div>
          ) : action.current?.status === 'error' ? (
            <div className="inline-block px-2 py-1 rounded bg-red-500 text-white animate-bounce [animation-iteration-count:2.5] [animation-duration:.3s]">
              Failed to create.
            </div>
          ) : null}
        </form>
      </div>
    </>
  )
}
