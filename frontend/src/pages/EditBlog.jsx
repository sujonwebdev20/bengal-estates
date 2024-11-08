import { useEffect, useState, useMemo, useRef } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import {
  useEditBlogByIdMutation,
  useGetBlogByIdQuery,
} from "../redux/features/BlogApi";
import { useParams } from "react-router-dom";
import JoditEditor from "jodit-react";
import { toast } from "react-toastify";

const EditBlog = ({ placeholder }) => {
  const { id } = useParams();
  const { data: blogData } = useGetBlogByIdQuery(id);
  const editor = useRef(null);
  const inputFile = useRef();

  const [content, setContent] = useState("");
  const [editBlogByIdMutation, { isLoading }] = useEditBlogByIdMutation();

  const config = useMemo(
    () => ({
      readonly: false,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );
  const [blogState, setBlogState] = useState({
    image: "",
    title: "",
  });

  useEffect(() => {
    if (blogData) {
      setBlogState({
        image: blogData.image || "",
        title: blogData.title || "",
      });
    }
  }, [blogData]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", blogState.image);
      formData.append("title", blogState.title);
      formData.append("content", content);
      const response = await editBlogByIdMutation({
        id,
        data: formData,
      }).unwrap();

      if (response.success) {
        toast.success(response.message);
        setBlogState({
          title: "",
        });
        setContent("");

        if (inputFile.current) {
          inputFile.current.value = "";
        }
      }
    } catch (error) {
      if (error) {
        toast.error(error.data.message);
      }
    }
  };

  return (
    <Container>
      <div className="w-full flex justify-center items-center mb-20">
        <div className="w-full mx-5 bg-dark_trans_purple px-3 py-8 rounded-lg">
          <form className="font-inter text-md" onSubmit={submitHandler}>
            <div className="mt-3 mb-5">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="multiple_files"
              >
                Upload a image
              </label>
              <input
                ref={inputFile}
                className="block w-full text-sm border border-light_purple cursor-pointer bg-medium_dark_purple  mb-5 rounded-full"
                id="files"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setBlogState({
                    ...blogState,
                    image: e.target.files[0],
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="title"
                placeholder="Main title"
                required={true}
                value={blogState.title}
                onChange={(e) =>
                  setBlogState({
                    ...blogState,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div className="text-black">
              <JoditEditor
                ref={editor}
                value={blogData?.content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onChange={(newContent) => setContent(newContent)}
              />
            </div>

            <div className="grid place-items-center mt-5">
              <Button
                disabled={isLoading ? true : false}
                title={isLoading ? "updating..." : "update blog"}
                width={"10rem"}
                height={"2.5rem"}
              />
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default EditBlog;
