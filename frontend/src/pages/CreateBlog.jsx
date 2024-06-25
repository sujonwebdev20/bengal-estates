import { useRef, useState } from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import { useCreateNewBlogMutation } from "../redux/features/BlogApi";
import { toast } from "react-toastify";

const CreateBlog = () => {
  const [createNewBlogMutation, { isLoading }] = useCreateNewBlogMutation();
  const inputFile = useRef();
  const [blogState, setBlogState] = useState({
    title: "",
    description: "",
    image: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(blogState);

    try {
      const formData = new FormData();
      formData.append("title", blogState.title);
      formData.append("image", blogState.image);
      formData.append("description", blogState.description);

      const response = await createNewBlogMutation(formData).unwrap();
      console.log("Upload response:", response);

      if (response.success) {
        toast.success(response.message);
        setBlogState({
          title: "",
          description: "",
          image: "",
        });
        if (inputFile.current) {
          inputFile.current.value = "";
        }
      }
    } catch (error) {
      console.error("Error uploading files", error);
    }
  };

  return (
    <Container>
      <div className="w-full flex justify-center items-center mb-20">
        <div className="w-full mx-5 bg-dark_trans_purple px-3 py-8 rounded-lg">
          <form className="font-inter text-md" onSubmit={submitHandler}>
            <input
              className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
              type="text"
              name="title"
              placeholder="Title"
              value={blogState.title}
              onChange={(e) =>
                setBlogState({
                  ...blogState,
                  title: e.target.value,
                })
              }
            />
            <div className="mt-3">
              <label
                className="block mb-2 text-sm font-medium "
                htmlFor="multiple_files"
              >
                Choose a image
              </label>
              <input
                ref={inputFile}
                className="block w-full text-sm border border-light_purple rounded-lg cursor-pointer bg-medium_dark_purple "
                id="files"
                type="file"
                required={true}
                onChange={(e) =>
                  setBlogState({
                    ...blogState,
                    image: e.target.files[0],
                  })
                }
              />
            </div>
            <textarea
              className="w-full px-5 py-2 mt-3 capitalize rounded-lg bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 resize-none"
              name="description"
              placeholder="Description"
              rows="5"
              value={blogState.description}
              onChange={(e) =>
                setBlogState({
                  ...blogState,
                  description: e.target.value,
                })
              }
            ></textarea>
            <div className="grid place-items-center mt-5">
              <Button
                disabled={isLoading ? true : false}
                title={isLoading ? "updating" : "add blog"}
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

export default CreateBlog;
