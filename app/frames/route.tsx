/* eslint-disable react/jsx-key */
import { Button } from "frames.js/next";
import { frames } from "./frames";

const frameHandler = frames(async (ctx) => {
  return {
    image: (
      <div tw="flex flex-col">
        <div tw="flex">frames.js starter</div>
        {ctx.message?.inputText && (
          <div tw="flex">{`Input: ${ctx.message.inputText}`}</div>
        )}
      </div>
    ),
    textInput: "Say something",
    buttons: [
      <Button action="post" target="/">
        Pay
      </Button>,
    ],
  };
});

export const GET = frameHandler;
export const POST = frameHandler;
