import React, { useState } from "react";
import Comment from "../components/Comment";

export const commentData = [
  {
    name: "KaushalKishore",
    text: "This is my youtube clone nested comment section",
    replies: [
      {
        name: "KaushalKishore",
        text: "This is my youtube clone nested comment section",
        replies: [
          {
            name: "KaushalKishore",
            text: "This is my youtube clone nested comment section",
            replies: [
              {
                name: "KaushalKishore",
                text: "This is my youtube clone nested comment section",
                replies: [
                  {
                    name: "KaushalKishore",
                    text: "This is my youtube clone nested comment section",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "KaushalKishore",
    text: "This is my youtube clone nested comment section",
    replies: [],
  },
  {
    name: "KaushalKishore",
    text: "This is my youtube clone nested comment section",
    replies: [
      {
        name: "KaushalKishore",
        text: "This is my youtube clone nested comment section",
        replies: [
          {
            name: "KaushalKishore",
            text: "This is my youtube clone nested comment section",
            replies: [
              {
                name: "KaushalKishore",
                text: "This is my youtube clone nested comment section",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "KaushalKishore",
    text: "This is my youtube clone nested comment section",
    replies: [],
  },
  {
    name: "KaushalKishore",
    text: "This is my youtube clone nested comment section",
    replies: [
      {
        name: "KaushalKishore",
        text: "This is my youtube clone nested comment section",
        replies: [],
      },
    ],
  },
  {
    name: "KaushalKishore",
    text: "This is my youtube clone nested comment section",
    replies: [],
  },
];

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment key={index} data={comment} />

      <div className="pl-2 ml-2 border-l-2 border-gray-300">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
export default CommentList;
