import { useRef, useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import { useCreateNewPropertyMutation } from "../redux/features/propertyApi";
import { toast } from "react-toastify";

const CreateProperty = () => {
  const [newPropertyMutation, { isLoading }] = useCreateNewPropertyMutation();
  const inputFile1 = useRef();
  const inputFile2 = useRef();

  const [newPropertyData, setNewPropertyData] = useState({
    name: "",
    thumbnail: "",
    images: [],
    price: "",
    propertyId: "",
    location: "",
    description: "",
    garages: "",
    propertySize: "",
    propertyType: "",
    yearBuilt: "",
    parking: "",
    garageSize: "",
    heating: "",
    bed: "",
    balcony: "",
    bath: "",
    features: [],
  });

  const featuresDataHandler = (e) => {
    const featuresArray = e.target.value
      .split(",")
      .map((feature) => feature.trim());
    setNewPropertyData({
      ...newPropertyData,
      features: featuresArray,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", newPropertyData.name);
      newPropertyData.images.forEach((image) => {
        formData.append("images", image);
      });

      formData.append("thumbnail", newPropertyData.thumbnail);

      formData.append("price", newPropertyData.price);
      formData.append("propertyId", newPropertyData.propertyId);
      formData.append("location", newPropertyData.location);
      formData.append("description", newPropertyData.description);
      formData.append("garages", newPropertyData.garages);
      formData.append("propertySize", newPropertyData.propertySize);
      formData.append("propertyType", newPropertyData.propertyType);
      formData.append("yearBuilt", newPropertyData.yearBuilt);
      formData.append("parking", newPropertyData.parking);
      formData.append("garageSize", newPropertyData.garageSize);
      formData.append("heating", newPropertyData.heating);
      formData.append("bed", newPropertyData.bed);
      formData.append("balcony", newPropertyData.balcony);
      formData.append("bath", newPropertyData.bath);
      formData.append("features", JSON.stringify(newPropertyData.features));
      formData.append("isAvailable", newPropertyData.isAvailable);

      const response = await newPropertyMutation(formData).unwrap();

      if (response.success) {
        toast.success(response.message);
        setNewPropertyData({
          name: "",
          thumbnail: "",
          images: [],
          price: "",
          propertyId: "",
          location: "",
          description: "",
          garages: "",
          propertySize: "",
          propertyType: "",
          yearBuilt: "",
          parking: "",
          garageSize: "",
          heating: "",
          bed: "",
          balcony: "",
          bath: "",
          features: [],
          isAvailable: "",
        });
        if (inputFile1.current || inputFile2.current) {
          inputFile1.current.value = "";
          inputFile2.current.value = "";
        }
      }
    } catch (error) {
      console.error("Error uploading files", error);
    }
  };

  return (
    <Container>
      <div className="w-full flex justify-center items-center mb-20">
        <div className="w-full bg-dark_trans_purple px-5 py-8 rounded-lg">
          <form className="font-inter text-md" onSubmit={submitHandler}>
            <div className="grid grid-cols-2 gap-3">
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 capitalize"
                type="text"
                name="name"
                placeholder="Name"
                value={newPropertyData.name}
                required={true}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    name: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="price"
                placeholder="Price"
                value={newPropertyData.price}
                required={true}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    price: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 capitalize"
                type="text"
                name="location"
                placeholder="Location"
                value={newPropertyData.location}
                required={true}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    location: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="propertyId"
                placeholder="ID"
                value={newPropertyData.propertyId}
                required={true}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    propertyId: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="isAvailable"
                placeholder="Available / Up Coming / Occupied"
                value={newPropertyData.isAvailable}
                required={true}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    isAvailable: e.target.value,
                  })
                }
              />
            </div>
            <div className="mt-3">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="thumbnail"
              >
                Choose thumbnail
              </label>

              <input
                ref={inputFile1}
                className="block w-full text-sm border border-light_purple rounded-lg cursor-pointer bg-medium_dark_purple "
                id="thumbnail"
                type="file"
                required={true}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    thumbnail: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="mt-3">
              <label
                className="block mb-2 text-sm font-medium"
                htmlFor="multiple_files"
              >
                Upload multiple images
              </label>
              <input
                ref={inputFile2}
                className="block w-full text-sm border border-light_purple rounded-lg cursor-pointer bg-medium_dark_purple "
                id="multiple_files"
                type="file"
                required={true}
                multiple
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    images: [...e.target.files],
                  })
                }
              />
            </div>

            <textarea
              className="w-full px-5 py-2 mt-3 rounded-lg bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 resize-none"
              name="description"
              placeholder="Description"
              rows="5"
              value={newPropertyData.description}
              required={true}
              onChange={(e) =>
                setNewPropertyData({
                  ...newPropertyData,
                  description: e.target.value,
                })
              }
            ></textarea>
            <div className="grid grid-cols-5 max-lg:grid-cols-4 max-sm:grid-cols-2 gap-3">
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="propertySize"
                placeholder="Property Size"
                value={newPropertyData.propertySize}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    propertySize: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="propertyType"
                placeholder="Property Type"
                value={newPropertyData.propertyType}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    propertyType: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="yearBuilt"
                placeholder="Year Built"
                value={newPropertyData.yearBuilt}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    yearBuilt: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="parking"
                placeholder="Parking"
                value={newPropertyData.parking}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    parking: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="garageSize"
                placeholder="Garage Size"
                value={newPropertyData.garageSize}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    garageSize: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="text"
                name="heating"
                placeholder="Heating"
                value={newPropertyData.heating}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    heating: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="bed"
                placeholder="Bed"
                value={newPropertyData.bed}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    bed: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="balcony"
                placeholder="Balcony"
                value={newPropertyData.balcony}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    balcony: e.target.value,
                  })
                }
              />
              <input
                className="w-full px-5 py-1 rounded-full bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300"
                type="number"
                name="bath"
                placeholder="Bath"
                value={newPropertyData.bath}
                onChange={(e) =>
                  setNewPropertyData({
                    ...newPropertyData,
                    bath: e.target.value,
                  })
                }
              />
            </div>
            <textarea
              className="w-full px-5 py-2 mt-3 rounded-lg bg-medium_dark_purple border-2 border-transparent focus:border-2 focus:border-light_purple outline-none placeholder:text-gray-300 resize-none"
              name="features"
              placeholder="Features: e.g. Bed, Smart TV & TV Trolley"
              rows="5"
              value={newPropertyData.features.join(", ")}
              onChange={featuresDataHandler}
            ></textarea>
            <div className="grid place-items-center mt-5">
              <Button
                disabled={isLoading ? true : false}
                title={isLoading ? "Adding..." : "add property"}
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

export default CreateProperty;
