'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Textarea } from '@/components/ui/textarea';
import { addPostAction } from '@/app/actions/postActions';

export function AddPostDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="">
          <DialogTitle className="">New post</DialogTitle>
          <DialogDescription>
            {/*  eslint-disable-next-line */}
            {/* Make changes to your profile here. Click save when you're done. */}
          </DialogDescription>
        </DialogHeader>
        <form
          id="new-post-form"
          className="py-4"
          onSubmit={(e) => {
            e.preventDefault();
            // @ts-expect-error type of form target value
            // console.log('🚀 ~ AddPostDialog ~ e:', e, e.target[0].value);
            addPostAction(e.target[0].value);
          }}
        >
          <Textarea className="h-56" placeholder="Type your message here." />
        </form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" form="new-post-form">
              Save post
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
