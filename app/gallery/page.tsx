"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { Navbar } from "@/components/navbar";
import { AmarismFooter } from "@/components/amarism-footer";
import { SocialBar } from "@/components/social-bar";

export default function GalleryPage() {
  const [items, setItems] = useState<any[]>([]);
  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState("image");

  const fetchGallery = async () => {
    const q = query(collection(db, "gallery"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setItems(data);
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleAddGallery = async () => {
    if (!title || !url) {
      alert("Please enter title and URL");
      return;
    }

    await addDoc(collection(db, "gallery"), {
      title,
      url,
      type,
      createdAt: serverTimestamp(),
    });

    alert("Gallery item added!");

    setTitle("");
    setUrl("");
    setType("image");
    setShowForm(false);

    fetchGallery();
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Delete this gallery item?");

    if (!confirmDelete) return;

    await deleteDoc(doc(db, "gallery", id));

    alert("Deleted successfully!");
    fetchGallery();
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center relative">
            <span className="text-[#0d9488] text-sm font-bold tracking-[0.3em] uppercase">
              Gallery
            </span>

            <h1 className="text-5xl md:text-7xl font-bold text-[#081229] mt-4 mb-6">
              Amarism Gallery
            </h1>

            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Photos and memories from Amarism initiatives.
            </p>

            <button
              onClick={() => setShowForm(!showForm)}
              className="mx-auto mb-10 w-14 h-14 rounded-full bg-[#082f73] text-white flex items-center justify-center shadow-lg hover:scale-105 transition"
            >
              <Plus className="w-7 h-7" />
            </button>
          </div>

          {showForm && (
            <div className="max-w-xl mx-auto bg-[#f8fbfb] border rounded-3xl p-6 mb-12">
              <h2 className="text-2xl font-bold text-[#081229] mb-5">
                Add Gallery Item
              </h2>

              <div className="space-y-4">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  className="w-full border rounded-xl px-4 py-3 outline-none"
                />

                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Image or Video URL"
                  className="w-full border rounded-xl px-4 py-3 outline-none"
                />

                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 outline-none"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>

                <button
                  onClick={handleAddGallery}
                  className="w-full bg-[#0d9488] text-white py-3 rounded-xl font-bold"
                >
                  Save to Gallery
                </button>
              </div>
            </div>
          )}

          {items.length === 0 ? (
            <div className="bg-[#f8fbfb] border border-gray-200 rounded-[32px] p-12 md:p-20 text-center">
              <div className="text-7xl mb-6">📷</div>

              <h2 className="text-3xl font-bold text-[#081229] mb-4">
                No uploads yet
              </h2>

              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Once photos are uploaded, they will be displayed beautifully in
                this gallery section.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border rounded-3xl overflow-hidden shadow-sm"
                >
                  {item.type === "video" ? (
                    <video
                      src={item.url}
                      controls
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                  )}

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-[#081229]">
                      {item.title}
                    </h3>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl font-semibold transition"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <AmarismFooter />
      <SocialBar />
    </main>
  );
}