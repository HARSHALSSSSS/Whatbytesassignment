import React, { useState } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import PageContainer from "@/components/PageContainer";

import Header from '../components/Header'; // eslint-disable-line @typescript-eslint/no-unused-vars


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState("1");
  const [percentile, setPercentile] = useState("30");
  const [correctAns, setCorrectAns] = useState("10");
  const [currentPage, setCurrentPage] = useState("skill-test"); // Set initial state to "skill-test"

  return (
    <Layout>
      <PageContainer
        setIsModalOpen={setIsModalOpen}
        rank={rank}
        percentile={percentile}
        correctAns={correctAns}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Modal
        setIsModalOpen={setIsModalOpen}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setCorrectAns={setCorrectAns}
        setPercentile={setPercentile}
        setRank={setRank}
        rank={rank}
        percentile={percentile}
        correctAns={correctAns}
      />
    </Layout>
  );
}