import { useState } from "react";
import axios from "../utils/axios";
import AsideLeft from "./AsideLeft";

const Uploader = () => {
  const [file, setFile] = useState(null); // To store the uploaded file
  const [caption, setCaption] = useState(""); // Caption input
  const [year, setYear] = useState(""); // Year for Result post type
  const [branch, setBranch] = useState(""); // Branch for Result post type
  const [description, setDescription] = useState(""); // Branch for Result post type
  const [sem, setSem] = useState(""); // Semester for Result post type
  const [kt, setKt] = useState(false); // KT for Result post type
  const [reval, setReval] = useState(false); // Reval for Result post type
  const [uploading, setUploading] = useState(false); // Uploading state
  const [uploadSuccess, setUploadSuccess] = useState(false); // Success state
  const [uploadError, setUploadError] = useState(""); // Error state
  const [postType, setPostType] = useState(""); // Options for members

  // Handle file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the file selected by the user
  };

  const onChange = (e) => {
    setPostType(e.target.value);
  };

  // Handle caption and members change
  const handleDetailsChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "caption") {
      setCaption(value); // Update caption
    } else if (name === "kt") {
      setKt(checked); // Update KT (checkbox)
    } else if (name === "reval") {
      setReval(checked); // Update Reval (checkbox)
    } else if (name === "year") {
      setYear(value); // Update year
    } else if (name === "branch") {
      setBranch(value); // Update branch
    } else if (name === "sem") {
      setSem(value); // Update semester
    } else if (name === "description") {
      setDescription(value); // Update semester
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Check if required fields are filled
    if (!file || (postType === "Result" && (!year || !branch || !sem))) {
      alert("Please complete all required fields.");
      return;
    }

    setUploading(true);

    // Prepare FormData for the file and details
    const formData = new FormData();
    formData.append("post", file); // Append the file
    formData.append("caption", caption); // Append the caption

    // Append post-specific fields (only if relevant)
    if (postType === "QuestionPaper") {
      formData.append("year", year);
      formData.append("branch", branch);
      formData.append("sem", sem);
      formData.append("kt", kt);
      formData.append("reval", reval);
    } else if (postType === "Result") {
      formData.append("year", year);
      formData.append("branch", branch);
      formData.append("sem", sem);
      formData.append("kt", kt);
      formData.append("reval", reval);
    } else if (postType === "Events") {
      formData.append("description", description);
    }
    try {
      let response;
      if (postType === "Post") {
        response = await axios.post("/post", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
      } else if (postType === "Result") {
        response = await axios.post("/uploadresult", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
      } else if (postType === "QuestionPaper") {
        response = await axios.post("/uploadpaper", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
      } else if (postType === "Events") {
        response = await axios.post("/uploadevent", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        });
      }

      if (response.data.success) {
        setUploadSuccess(true); // Set success state on upload success
        alert("File uploaded successfully!");
      } else {
        setUploadError("Error occurred during upload"); // Handle upload error
      }
    } catch (error) {
      setUploadError(error.message); // Set error state in case of failure
      alert("You are not admin");
    } finally {
      setUploading(false); // Reset uploading state
    }
  };

  return (
    <>
      <AsideLeft />
      <div>
        <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold text-center mb-4">Upload</h2>

          <label className="w-full relative flex pb-2 text-gray-400">
            <select
              name="postType"
              value={postType}
              onChange={onChange}
              className="w-full font-thin border text-black border-black p-2 rounded-lg "
            >
              <option value="">Select Type</option>
              <option value="Post">Post</option>
              <option value="Result">Result</option>
              <option value="QuestionPaper">Question Paper</option>
              <option value="Events">Events</option>
            </select>
          </label>

          {/* Conditional Post Upload Form */}
          {postType === "Post" && (
            <>
              <div className="mb-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {file && (
                  <p className="mt-2 text-gray-600">
                    Selected file: {file.name}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="caption"
                  value={caption}
                  onChange={handleDetailsChange}
                  placeholder="Caption"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </>
          )}

          {/* Conditional Result Upload Form */}
          {postType === "QuestionPaper" && (
            <div>
              <div className="mb-4">
                <input
                  type="file"
                  accept="/*"
                  onChange={handleFileChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {file && (
                  <p className="mt-2 text-gray-600">
                    Selected file: {file.name}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="year"
                  value={year}
                  onChange={handleDetailsChange}
                  placeholder="Year"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="branch"
                  value={branch}
                  onChange={handleDetailsChange}
                  placeholder="Branch"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="sem"
                  value={sem}
                  onChange={handleDetailsChange}
                  placeholder="Semester"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="kt"
                    checked={kt}
                    onChange={handleDetailsChange}
                    className="mr-2"
                  />
                  KT (Yes/No)
                </label>
              </div>
              {postType === "Result" && (
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="reval"
                      checked={reval}
                      onChange={handleDetailsChange}
                      className="mr-2"
                    />
                    Reval (Yes/No)
                  </label>
                </div>
              )}
            </div>
          )}
          {postType === "Result" && (
            <div>
              <div className="mb-4">
                <input
                  type="file"
                  accept="/*"
                  onChange={handleFileChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {file && (
                  <p className="mt-2 text-gray-600">
                    Selected file: {file.name}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="year"
                  value={year}
                  onChange={handleDetailsChange}
                  placeholder="Year"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="branch"
                  value={branch}
                  onChange={handleDetailsChange}
                  placeholder="Branch"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="sem"
                  value={sem}
                  onChange={handleDetailsChange}
                  placeholder="Semester"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="kt"
                    checked={kt}
                    onChange={handleDetailsChange}
                    className="mr-2"
                  />
                  KT (Yes/No)
                </label>
              </div>

              <div className="mb-4">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="reval"
                    checked={reval}
                    onChange={handleDetailsChange}
                    className="mr-2"
                  />
                  Reval (Yes/No)
                </label>
              </div>
            </div>
          )}

          {postType === "Events" && (
            <div>
              <div className="mb-4">
                <input
                  type="file"
                  accept="/*"
                  onChange={handleFileChange}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
                {file && (
                  <p className="mt-2 text-gray-600">
                    Selected file: {file.name}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="description"
                  value={description}
                  onChange={handleDetailsChange}
                  placeholder="description"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Upload"}
          </button>

          {/* Error or Success Message */}
          {uploadSuccess && (
            <p className="mt-4 text-green-500">Upload successful!</p>
          )}
          {uploadError && <p className="mt-4 text-red-500">{uploadError}</p>}
        </div>
      </div>
    </>
  );
};

export default Uploader;
